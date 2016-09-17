import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin.component';

import { UserComponent } from './../user/components/user.component';
import { UserListComponent } from './../user/components/user-list.component';
import { UserDetailComponent } from './../user/components/user-detail.component';
import { UserEditComponent } from './../user/components/user-edit.component';
import { UserNewComponent } from './../user/components/user-new.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: '',
            },
            {
                path: 'users',
                component: UserComponent,
                children: [
                    {
                        path: '',
                        component: UserListComponent
                    },
                    {
                        path: 'new',
                        component: UserNewComponent
                    },
                    {
                        path: ':id',
                        component: UserDetailComponent
                    },
                    {
                        path: 'edit/:id',
                        component: UserEditComponent
                    }
                ]
            }
        ]
    },
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);