import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'logout',
    template: ``
})

export class LogoutComponent {

    constructor(
        public authService: AuthService,
        public router: Router
    ) {
        this.logout();
    }

    logout() {
        this.authService.logout();
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        this.router.navigate([redirect]);
    }
}