import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Article } from '../models/index';

@Injectable()
export class ArticleService {
  constructor(private authHttp: AuthHttp) { }

  search(term: string): Observable<Article[]> {
    return this.authHttp
      .get(`app/articles/?name=${term}`)
      .map((r: Response) => r.json().data as Article[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
