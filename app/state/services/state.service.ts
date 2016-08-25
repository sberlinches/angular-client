import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Models
import { StateModel } from '../models/state.model';
import { CityModel } from '../../city/models/city.model';

@Injectable()
export class StateService {

    // TODO: External config file
    private domainUrl = 'https://localhost:3443';
    private UsersUrl = this.domainUrl + '/api/states/';

    // TODO: External module
    private extractData(response: Response) {
        let body = response.json();
        return body.data || { };
    }

    // TODO: External module
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    constructor(
        private http: Http
    ) {}

    getStates(): Observable<StateModel[]> {
        return this.http
            .get(this.UsersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getState(id: number): Observable<StateModel> {
        return this.http
            .get(this.UsersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCitiesByState(id: number): Observable<CityModel[]> {
        return this.http
            .get(this.UsersUrl + id + '/cities')
            .map(this.extractData)
            .catch(this.handleError);
    }
}