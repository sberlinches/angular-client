import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {I18nPluralPipe, NgLocalization} from "@angular/common";
// Services
import { UserService } from './../services/user.service';
// Models
import { UserModel } from './../models/user.model';
// Components
import { UserDetailComponent } from './user-detail.component';
// Pipes
import { TimeBetweenPipe } from './../../shared/pipes/timeBetween.pipe';
// Functions
import { DateFunctions } from './../../shared/functions/date.functions';

class TimeLocalization extends NgLocalization {
    getPluralCategory(value: any) {
        if(value > 1) {
            return 'other';
        }
    }
}

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/views/user-list.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        UserDetailComponent
    ],
    pipes: [
        I18nPluralPipe,
        TimeBetweenPipe
    ],
    providers: [
        { provide: NgLocalization, useClass: TimeLocalization },
        DateFunctions // TimeBetweenPipe dependency
    ]
})

export class UserListComponent implements OnInit {

    errorMessage: string;
    users: UserModel[];
    selectedUser: UserModel;
    todayDate: Date = new Date();
    ageFormat: string = 'year';
    timeMapping: any = {
        '=1': '# year',
        'other': '# years'
    };

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
        // Promise
        /*this.userService.getUsers()
            .then(users => this.users = users);*/
        // Observable
        this.userService
            .getUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error
            );
    }

    onSelect(user: UserModel) {
        this.selectedUser = user;
    }

    goToUserEdit() {
        this.router.navigate(['UserEdit', { id: this.selectedUser.id }]);
    }
}