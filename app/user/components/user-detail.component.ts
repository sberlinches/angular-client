import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// Models
import { UserModel } from './../models/user.model';
// Services
import { UserService } from './../services/user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/views/user-detail.component.html'
})

export class UserDetailComponent implements OnInit, OnDestroy {

    errorMessage: string;
    user: UserModel;
    private subscription: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            let userId = +params['id'];
            this.getUser(userId);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getUser(userId: number): void {
        this.userService
            .getUser(userId)
            .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
            );
    }

    goBack(): void {
        window.history.back();
    }
}