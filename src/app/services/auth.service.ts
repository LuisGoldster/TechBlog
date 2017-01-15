import { Injectable, Provider } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthConfigConsts, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  private readonly AUTH_URL = '/api/auth/login';
  private readonly AUTH_USER_NAME = 'username';
  private readonly AUTH_TOKEN_NAME = AuthConfigConsts.DEFAULT_TOKEN_NAME;

  constructor(private http: Http) {}

  login(username: string, password: string): Observable<boolean> {

    return this.http.post(this.AUTH_URL, JSON.stringify({
        username: username,
        password: password
      }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          // store username and jwt token in local storage
          // to keep user logged in between page refreshes
          localStorage.setItem(this.AUTH_USER_NAME, username);
          localStorage.setItem(this.AUTH_TOKEN_NAME, token);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem(this.AUTH_USER_NAME);
    localStorage.removeItem(this.AUTH_TOKEN_NAME);
  }

  loggedIn(): boolean {
    return tokenNotExpired();
  }

}
