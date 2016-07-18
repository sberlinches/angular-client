import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
// RxJS Observable operators
import './rxjs-operators';
// Services
import { UserService } from "./user/services/user.service";
import { StatusService } from './todo/services/status.service';
import { TodoService } from './todo/services/todo.service';
// Components
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { UserListComponent } from './user/components/user-list.component';
import { UserDetailComponent } from './user/components/user-detail.component';
import { UserEditComponent } from './user/components/user-edit.component';
import { UserNewComponent } from './user/components/user-new.component';
import { TodoComponent } from './todo/components/todo.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        UserService,
        StatusService,
        TodoService
    ]
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
        path: '/user/edit/:id',
        name: 'UserEdit',
        component: UserEditComponent
    },
    {
        path: '/user/new',
        name: 'UserNew',
        component: UserNewComponent
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoComponent
    },
])

export class AppComponent {}