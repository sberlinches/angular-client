import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Models
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

    // TODO: External config file
    //let url = `${this.heroesUrl}/${id}`;
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
    ) {}

    // Observable
    getUsers(): Observable<UserModel[]> {
        return this.http
            .get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUser(id: number): Observable<UserModel> {
        return this.http
            .get(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    createUser(user: UserModel): Observable<UserModel> {

        let url = this.usersUrl;
        let body = JSON.stringify(user);
        let options = { headers: this.headers };

        return this.http
            .post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateUser(user: UserModel): Observable<UserModel> {

        let url = this.usersUrl + user.id;
        let body = JSON.stringify(user);
        let options = { headers: this.headers };

        return this.http
            .patch(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}