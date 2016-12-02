import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { GlobalState } from '../../../global.state';
import { layoutSizes } from '../../../theme';
import { MENU } from '../../../../app/app.menu';
import * as _ from 'lodash';

@Component({
  selector: 'tb-sidebar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./tbSidebar.scss')],
  template: require('./tbSidebar.html')
})
export class TbSidebar {

  // here we declare which routes we want to use as a menu in our sidebar
  // we're creating a deep copy since we are going to change that object
  public routes = _.cloneDeep(MENU);

  public menuHeight: number;
  public isMenuCollapsed: boolean = false;
  public isMenuShouldCollapsed: boolean = false;


  constructor(private _elementRef: ElementRef, private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngOnInit(): void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize(): void {

    let isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
