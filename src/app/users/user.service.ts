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

    private rootUrl: string = 'http://localhost:8080/rest/users/';

    constructor(private http: Http) { }

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

    getVehiclesForUser(id: number): Observable<Vehicle[]> {
      return this.http.get(this.rootUrl + id + '/vehicles')
        .map(response => this.vehicles = response.json());
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
