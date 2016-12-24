import './app.loader.ts';
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { GlobalState } from './global.state';
import { TbImageLoaderService, TbThemePreloader, TbThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { TbThemeConfig } from './theme/theme.config';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.component.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" tbThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: TbImageLoaderService,
              private _spinner: TbThemeSpinner,
              private _config: TbThemeConfig,
              private viewContainerRef: ViewContainerRef) {

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    TbThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    TbThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'loaded.png'));
  }
}
