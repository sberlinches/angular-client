import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRouting } from './auth.routing';

import { LoginComponent } from './components/login.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        CommonModule,
        authRouting
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
})

export class LoginModule {}