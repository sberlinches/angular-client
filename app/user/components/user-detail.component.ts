import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { UserModel } from './../models/user.model';
// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/views/user-detail.component.html'
})

export class UserDetailComponent implements OnInit {

    errorMessage: string;
    user: UserModel;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.getUser();
    }

    getUser(): void {

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];


            this.userService
                .getUser(id)
                .subscribe(
                    user => this.user = user,
                    error => this.errorMessage = <any>error
                );

        });


    }

    goBack(): void {
        window.history.back();
    }
}