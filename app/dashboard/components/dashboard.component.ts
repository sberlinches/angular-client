import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
// Services
import { UserService } from './../../user/services/user.service';
// Interfaces
import { UserInterface } from './../../user/services/interfaces/user.interface';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    // Fill the variable with the interface
    users: UserInterface[] = [];

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        // Fill the variable with data
        this.userService.getUsers()
            .then(users => this.users = users.slice(0,4));
    }

    gotoDetail(user: UserInterface) {
        let link = ['UserDetail', { id: user.id }];
        this.router.navigate(link);
    }
}