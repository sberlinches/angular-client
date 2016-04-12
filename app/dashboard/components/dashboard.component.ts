import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { UserInterface } from './../../user/services/interfaces/user.interface';
import { UserService } from './../../user/services/user.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    users: UserInterface[] = [];

    constructor(
        private _router: Router,
        private _userService: UserService) {}

    ngOnInit() {
        this._userService.getUsers()
            .then(users => this.users = users.slice(0,4));
    }

    gotoDetail(user: UserInterface) {
        let link = ['UserDetail', { id: user.id }];
        this._router.navigate(link);
    }
}