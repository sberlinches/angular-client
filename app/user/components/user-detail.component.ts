import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { UserInterface } from './../services/interfaces/user.interface';
import { UserService } from './../services/user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/views/user-detail.component.html'
})

export class UserDetailComponent {
    user: UserInterface;

    constructor(
        private _userService: UserService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._userService.getUser(id)
            .then(user => this.user = user)
    }

    goBack() {
        window.history.back();
    }
}