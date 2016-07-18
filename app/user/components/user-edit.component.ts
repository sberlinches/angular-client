import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated'; // TODO
import { NgForm } from '@angular/common';
import { UserService } from './../services/user.service';
import { UserModel } from './../models/user.model';

@Component({
    selector: 'user-edit',
    templateUrl: 'app/user/views/user-edit.component.html'
})

export class UserEditComponent {


    countries = ['Spain', 'Japan'];

    //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    errorMessage: string;
    user: UserModel;

    constructor(
        private userService: UserService,
        private routeParams: RouteParams
    ) {}

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        let id = +this.routeParams.get('id');

        this.userService
            .getUser(id)
            .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
            );
    }





    submitted = false;
    onSubmit() { this.submitted = true; }


    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.user); }
}