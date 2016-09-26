import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../user/models/user.model';
import { WebStorageService } from '../../shared/services/web-storage.service';
import { LoginInterface } from '../interfaces/login.interface';

@Injectable()
export class AuthService {

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
        private http: Http,
        private webStorageService: WebStorageService
    ) {}

    login(login: LoginInterface): Observable<UserModel[]> {

        this.logout();

        // TODO: External file
        let url = 'https://localhost:3443/api/auth/login';
        let body = JSON.stringify(login);
        let options = { headers: new Headers({'Content-Type': 'application/json'}) };

        return this.http
            .post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
            .do(
                data => this.webStorageService.setItem('user', data, login.rememberMe)
            );
    }

    logout(): void {
        this.webStorageService.clear();
    }
}