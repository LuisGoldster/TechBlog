import { Injectable } from '@angular/core';

@Injectable()
export class TbThemePreloader {

  private static _loaders: Array<Promise<any>> = [];

  public static registerLoader(method: Promise<any>): void {
    TbThemePreloader._loaders.push(method);
  }

  public static clear(): void {
    TbThemePreloader._loaders = [];
  }

  public static load(): Promise<any> {
    return new Promise((resolve, reject) => {
      TbThemePreloader._executeAll(resolve);
    });
  }

  private static _executeAll(done: Function): void {
    setTimeout(() => {
      Promise.all(TbThemePreloader._loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
