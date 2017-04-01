import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';

import { Observable }           from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User }                 from '../users/user';
import { Vehicle }              from './vehicle';

@Injectable()
export class VehicleService {

    private user: User;

    private vehicles: Vehicle[] = [];

    private rootUrl: string = 'http://localhost:8080/rest/users/';

    constructor(private http: Http) {

    }

    getRenewals(id: number, year: number, month: number): Observable<Vehicle[]> {
      return this.http.get('http://localhost:8080/rest/users/1/vehicles/2017/09')
      //return this.http.get(this.rootUrl + id + '/vehicles/' + year + '/' + month)
        .map(response => this.vehicles = response.json());
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}














