import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../user/models/user.model';

interface UserInterface {
    username: string,
    password: string
}

@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;
    user;
    redirectUrl: string;

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
        return Observable.throw(error);
    }

    constructor(
        private http: Http
    ) {}

    login(user: UserInterface): Observable<UserModel[]> {

        let url = 'https://localhost:3443/api/auth/login';
        let body = JSON.stringify(user);
        let options = { headers: new Headers({'Content-Type': 'application/json'}) };

        return this.http
            .post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
            .do(
                data => {
                    this.isLoggedIn = true,
                    this.user = data
                }
            );
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}