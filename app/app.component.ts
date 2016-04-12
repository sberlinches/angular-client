import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserService } from './user/services/user.service';

import { DashboardComponent } from './dashboard/components/dashboard.component';
import { UserListComponent } from './user/components/user-list.component';
import { UserDetailComponent } from './user/components/user-detail.component';
import { UserNewComponent } from './user/components/user-new.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/user/list',
        name: 'UserList',
        component: UserListComponent
    },
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: UserDetailComponent
    },
    {
        path: '/user/new',
        name: 'UserNew',
        component: UserNewComponent
    },
])

export class AppComponent {
}