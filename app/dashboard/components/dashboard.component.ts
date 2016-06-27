import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
// Services
import { UserService } from './../../user/services/user.service';
// Models
import { UserModel } from './../../user/models/user.model';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    errorMessage: string;
    users: UserModel[];

    constructor(
        private router: Router,
        private userService: UserService
    ) {}
    
    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService
            .getUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error
            );
    }

    gotoDetail(user: UserModel) {
        let link = ['UserDetail', { id: user.id }];
        this.router.navigate(link);
    }
}