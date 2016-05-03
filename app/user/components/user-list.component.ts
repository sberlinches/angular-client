import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
// Services
import { UserInterface } from './../services/interfaces/user.interface';
// Interfaces
import { UserService } from './../services/user.service';
// Components
import { UserDetailComponent } from './user-detail.component';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/views/user-list.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class UserListComponent implements OnInit {

    // Fill the variable with the interface
    users: UserInterface[];
    selectedUser: UserInterface;

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    //
    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        // Fill the variable with data
        this.userService.getUsers()
            .then(users => this.users = users);
    }

    onSelect(user: UserInterface) {
        this.selectedUser = user;
    }

    gotoDetail() {
        this.router.navigate(['UserDetail', { id: this.selectedUser.id }]);
    }
}