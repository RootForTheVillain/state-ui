import { Injectable }           from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';

import { Observable }           from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User }                 from './user';
import { Vehicle }              from '../vehicles/vehicle';
import { UtilsService }         from '../common/utils.service';

@Injectable()
export class UserService {

    users: User[] = [];

    private vehicles: Vehicle[] = [];
    private isLoggedIn: boolean = false;

    private rootUrl: string = 'http://localhost:8080/rest/users/';

    constructor(
      private http: Http,
      private utils: UtilsService) {}

    getUsers(): Observable<User[]> {
      let options = this.utils.getHeaders();
      return this.http.get(this.rootUrl, options)
        .map(response => response.json());
    }

    getUser(id: number): Promise<User> {
      return this.http.get(this.rootUrl + id, this.utils.getHeaders())
        .toPromise()
        .then(response => response.json() as User)
        .catch(this.handleError);
    }

    authenticate(email: string, password: string): Observable<User> {
      let options = this.utils.getHeaders();
      return this.http.post('http://localhost:8080/rest/login', { email: email, password: password }, options)
        .map(response => { return response.json() });
    }

    logout(): void {
      sessionStorage.removeItem('auth_user');
    }

    setAuthenticatedUser(user: User): void {
      sessionStorage.setItem('auth_user', JSON.stringify(user));
    }

    getAuthenticatedUser(): User {
      return JSON.parse(sessionStorage.getItem('auth_user')) as User;
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
