import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserEditComponent } from './components/user-edit.component';
import { UserNewComponent } from './components/user-new.component';

const userRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent,
        children: [
            {
                path: '',
                component: UserListComponent,
            },
            {
                path: 'new',
                component: UserNewComponent
            },
            {
                path: ':id',
                component: UserDetailComponent,
            },
            {
                path: 'edit/:id',
                component: UserEditComponent,
            }
        ]
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);