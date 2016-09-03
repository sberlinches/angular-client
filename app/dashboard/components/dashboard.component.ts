import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { UserModel } from './../../user/models/user.model';
// Services
import { UserService } from './../../user/services/user.service';


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
    
    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService
            .getUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error
            );
    }

    gotoUserDetails(user: UserModel): void {
        let link = ['/user', user.id];
        this.router.navigate(link);
    }
}