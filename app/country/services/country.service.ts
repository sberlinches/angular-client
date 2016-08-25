import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Models
import { CountryModel } from '../models/country.model';
import { StateModel } from '../../state/models/state.model';

@Injectable()
export class CountryService {

    // TODO: External config file
    private domainUrl = 'https://localhost:3443';
    private UsersUrl = this.domainUrl + '/api/countries/';

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

    getCountries(): Observable<CountryModel[]> {
        return this.http
            .get(this.UsersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCountry(id: number): Observable<CountryModel> {
        return this.http
            .get(this.UsersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getStatesByCountry(id: number): Observable<StateModel[]> {
        return this.http
            .get(this.UsersUrl + id + '/states')
            .map(this.extractData)
            .catch(this.handleError);
    }
}