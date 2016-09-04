import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { UserListComponent } from './user/components/user-list.component';
import { UserDetailComponent } from './user/components/user-detail.component';
import { UserEditComponent } from './user/components/user-edit.component';
import { UserNewComponent } from './user/components/user-new.component';
//import { TodoComponent } from './todo/components/todo.component';

const appRoutes: Routes = [
    // Todo: page not found
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'user/new',
        component: UserNewComponent
    },
    {
        path: 'user/:id',
        component: UserDetailComponent
    },
    {
        path: 'user/edit/:id',
        component: UserEditComponent
    },
    /*{
        path: 'todos',
        component: TodoComponent
    }*/
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);