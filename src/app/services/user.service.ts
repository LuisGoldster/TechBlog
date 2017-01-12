import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../models/index';

@Injectable()
export class UserService {
  constructor(private authHttp: AuthHttp) { }

  search(term: string): Observable<User[]> {
    return this.authHttp
      .get(`app/users/?name=${term}`)
      .map((r: Response) => r.json().data as User[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
