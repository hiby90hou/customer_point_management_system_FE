import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  private tokenExpireTime: Date;

  login(email: string, password: string) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    return this.http.post<any>(`${environment.apiUrl}/auth/login`, body.toString(), options)
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response && response.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('access_token', response.access_token);
          const currentTime = new Date();
          this.tokenExpireTime = new Date(currentTime.getTime() + 2*3600*1000);
        }
        return response.user;
      }));
  }

  logout() {
    // remove user from local storage to log user outhiby90hou
    localStorage.removeItem('currentUser');
    localStorage.removeItem('access_token');
  }
  isTokenExpired() {
    if (!this.tokenExpireTime || this.tokenExpireTime < new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
