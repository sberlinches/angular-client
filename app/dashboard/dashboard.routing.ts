import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DashboardComponent } from './components/dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);