import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    constructor(
        public authService: AuthService
    ) {}
}