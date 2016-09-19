import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        authRouting
    ],
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
})

export class LoginModule {}