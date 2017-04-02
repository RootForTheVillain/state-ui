import { Injectable }           from '@angular/core';
import { Http, Response }       from '@angular/http';

import { Observable }           from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User }                 from '../users/user';
import { Vehicle }              from './vehicle';

import { UtilsService }         from '../common/utils.service';

@Injectable()
export class VehicleService {

    private user: User;

    private vehicles: Vehicle[] = [];

    private rootUrl: string = 'http://localhost:8080/rest/users/';

    constructor(
      private http: Http,
      private utilsService: UtilsService) {}

    getRenewals(id: number, year: number, month: number, end?: number): Observable<Vehicle[]> {
      console.log('getRenewals', id, year, month)

      let qs = (typeof end !== 'undefined') ? '?monthToEnd=' + end: '';

      return this.http.get(this.rootUrl + id + '/vehicles/' + year + '/' + month + qs)
        .map(response => this.vehicles = response.json());
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}














