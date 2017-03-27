import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';

import { Observable }           from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User }                 from './user';
import { Vehicle }              from '../vehicles/vehicle';

@Injectable()
export class UserService {

    users: User[] = [];

    private vehicles: Vehicle[] = [];
    private isLoggedIn: boolean = false;

    private rootUrl: string = 'http://localhost:8080/rest/users/';

    constructor(private http: Http) {
      this.isLoggedIn = !!localStorage.getItem('auth_token');
    }

    getUsers(): Observable<User[]> {
      return this.http.get(this.rootUrl)
        .map(response => response.json());
    }

    getUser(id: number): Promise<User> {
      return this.http.get(this.rootUrl + id)
        .toPromise()
        .then(response => response.json() as User)
        .catch(this.handleError);
    }

    getAuthenticatedUser(): User {
      let user = null;
      if (localStorage.getItem('auth_user')) {
        this.getUser(+localStorage.getItem('auth_user'))
        .then(response => user);
      }
      return user;
    }

    getVehiclesForUser(id: number): Observable<Vehicle[]> {
      return this.http.get(this.rootUrl + id + '/vehicles')
        .map(response => this.vehicles = response.json());
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}














