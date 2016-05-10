import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
// Services
import { UserService } from './../services/user.service';
// Models
import { UserModel } from './../models/user.model';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/views/user-detail.component.html'
})

export class UserDetailComponent {

    // Fill the variable with the interface
    user: UserModel;

    constructor(
        private userService: UserService,
        private routeParams: RouteParams
    ) {}

    // When the component is ready
    ngOnInit() {
        this.getUser();
    }

    getUser() {
        // Get params from the route
        let id = +this.routeParams.get('id');

        // Fill the variable with data
        this.userService.getUser(id)
            .then(user => this.user = user)
    }

    goBack() {
        window.history.back();
    }
}