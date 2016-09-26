import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginInterface } from '../interfaces/login.interface';

@Component({
    selector: 'login',
    templateUrl: 'app/auth/views/login.component.html'
})

export class LoginComponent {

    login: LoginInterface = {
        'username': null,
        'password': null,
        'rememberMe': true
    };

    constructor(
        public authService: AuthService,
        public router: Router
    ) {}

    onSubmit(form): void {
        if (form.valid) {
            this.authService
                .login(this.login)
                .subscribe(
                    data => {
                        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
                        this.router.navigate([redirect]);
                    },
                    error => {
                        console.log(error); // TODO
                    }
                );
        }
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.login);
    }
}