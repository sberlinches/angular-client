import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface UserInterface {
    username: string,
    password: string
}

@Component({
    selector: 'login',
    templateUrl: 'app/auth/views/login.component.html'
})

export class LoginComponent {

    user: UserInterface = {
        'username': null,
        'password': null
    };

    constructor(
        public authService: AuthService,
        public router: Router
    ) {}

    onSubmit(form): void {
        if (form.valid) {
            this.authService
                .login(this.user)
                .subscribe(
                    data => {
                        console.log(data);
                        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
                        this.router.navigate([redirect]);
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.user);
    }
}