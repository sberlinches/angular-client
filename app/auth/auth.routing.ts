import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';

const authRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);