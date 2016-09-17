import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgLocalization } from "@angular/common";

import { UserModel } from './../models/user.model';
import { UserService } from './../services/user.service';

class TimeLocalization extends NgLocalization {
    getPluralCategory(value: any) {
        if(value < 0) {
            return '<0';
        }
        if(value > 1) {
            return '>1';
        }
    }
}

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/views/user-list.component.html',
    providers: [
        { provide: NgLocalization, useClass: TimeLocalization }
    ]
})

export class UserListComponent implements OnInit {

    errorMessage: string;
    users: UserModel[];
    selectedUser: UserModel;
    todayDate: Date = new Date();
    ageFormat: string = 'toYears';
    // TODO: External config file
    timeMapping: any = {
        '<0': '# years',
        '=-1': '# year',
        '=0': 'Less than a year',
        '=1': '# year',
        '>1': '# years'
    };

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService
            .getUsers()
            .subscribe(
                data => this.users = data,
                error => this.errorMessage = <any>error
            );
    }

    onSelect(user: UserModel): void {
        this.selectedUser = user;
    }

    goToUserDetail(): void {
        let commands = [ this.selectedUser.id ];
        let extras = { relativeTo: this.route };
        this.router.navigate(commands, extras);
    }

    goToUserEdit(): void {
        let commands = [ 'edit', this.selectedUser.id ];
        let extras = { relativeTo: this.route };
        this.router.navigate(commands, extras);
    }

    deleteUser(): void {
        let userId: number = this.selectedUser.id;
        this.userService
            .deleteUser(userId)
            .subscribe(
                data => {
                    let index = this.users.indexOf(this.selectedUser);
                    this.users.splice(index, 1);
                    this.selectedUser = null;
                },
                error => this.errorMessage = <any>error
            );
    }
}