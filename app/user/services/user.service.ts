import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Services
//import { LoggerService } from './../../shared/services/logger.service';
// Models
import { UserModel } from '../models/user.model';
// Mocks(DB data)
//import { UserMock } from '../mocks/user.mock';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    // TODO: External config file
    private domainUrl = 'https://localhost:3443';
    private usersUrl = this.domainUrl + '/api/users/';
    private headers = new Headers({'Content-Type': 'application/json'});

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
        // TODO: Logger service
        //private loggerService: LoggerService
    ) {}

    // Observable
    getUsers(): Observable<UserModel[]> {
        return this.http
            .get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Promise
    /*getUsers() {
        this.loggerService.log(`Users in DB: ${UserMock.length}`);
        return Promise.resolve(UserMock);
    }*/

    getUser(id: number): Observable<UserModel> {
        return this.http
            .get(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    // Promise
    /*getUser(id: number) {
        this.loggerService.log(`User ID: ${id}`);

        return Promise.resolve(UserMock).then(
            users => users.filter(user => user.id === id)[0]
        );
    }*/

    updateUser(id: number, data: any): Observable<UserModel> {

        let url = this.usersUrl + id;
        let body = JSON.stringify(data);
        let options = { headers: this.headers };

        return this.http
            .patch(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}