import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { UserInterface } from './../services/interfaces/user.interface';
import { UserService } from './../services/user.service';

import { UserDetailComponent } from './user-detail.component';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/views/user-list.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class UserListComponent implements OnInit {
    users: UserInterface[];
    selectedUser: UserInterface;

    constructor(
        private _router: Router,
        private _userService: UserService) {
    }

    getUsers() {
        this._userService.getUsers()
            .then(users => this.users = users);
    }

    ngOnInit() {
        this.getUsers();
    }

    onSelect(user: UserInterface) {
        this.selectedUser = user;
    }

    gotoDetail() {
        this._router.navigate(['UserDetail', { id: this.selectedUser.id }]);
    }
}