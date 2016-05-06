import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
// Services
import { UserService } from './../services/user.service';
// Models
import { UserModel } from './../services/models/user.model';
// Components
import { UserDetailComponent } from './user-detail.component';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/views/user-list.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        UserDetailComponent
    ],
})

export class UserListComponent implements OnInit {

    // Fill the variable with the interface
    users: UserModel[];
    selectedUser: UserModel;

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
            .then(users => this.users = users);
    }

    onSelect(user: UserModel) {
        this.selectedUser = user;
    }

    gotoDetail() {
        this.router.navigate(['UserDetail', { id: this.selectedUser.id }]);
    }
}