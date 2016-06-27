import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Services
import { LoggerService } from './../../shared/services/logger.service';
// Models
import { UserModel } from '../models/user.model';
// Mocks(DB data)
//import { UserMock } from '../mocks/user.mock';

@Injectable()
export class UserService {

    private domainUrl = 'https://localhost:3443';
    private UsersUrl = this.domainUrl + '/api/users/';
    
    private extractData(response: Response) {
        let body = response.json();
        return body.data || { };
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    constructor(
        private http: Http,
        private loggerService: LoggerService
    ) {}

    // Observable
    getUsers(): Observable<UserModel[]> {
        return this.http
            .get(this.UsersUrl)
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
            .get(this.UsersUrl + id)
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
}