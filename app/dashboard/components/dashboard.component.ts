import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
// Services
import { UserService } from './../../user/services/user.service';
// Models
import { UserModel } from './../../user/services/models/user.model';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    // Fill the variable with the model
    users: UserModel[] = [];

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    // When the component is ready
    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        // Fill the variable with data
        this.userService.getUsers()
            .then(users => this.users = users.slice(0,4));
    }

    gotoDetail(user: UserModel) {
        let link = ['UserDetail', { id: user.id }];
        this.router.navigate(link);
    }
}