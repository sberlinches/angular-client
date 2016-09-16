import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { CountryService } from '../../country/services/country.service';
import { StateService } from '../../state/services/state.service';

import { CountryStateCitySelectorHelper } from '../../shared/helpers/country_state_city-selector.helper';

@Component({
    selector: 'user-edit',
    templateUrl: 'app/user/views/user-edit.component.html'
})

export class UserEditComponent extends CountryStateCitySelectorHelper implements OnInit, OnDestroy {

    errorMessage: string;
    submitted: boolean = false;
    user: UserModel;
    todayDate: Date = new Date(); // TODO: External file
    private subscription: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        protected countryService: CountryService,
        protected stateService: StateService
    ) {
        super(countryService, stateService);
    }

    ngOnInit(): void {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            let userId = +params['id'];
            this.getUser(userId);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onCountryChange(countryId: number): void {
        super.onCountryChange(countryId);
        this.user.stateId = null;
        this.user.cityId = null;
    }

    onStateChange(stateId: number): void {
        super.onStateChange(stateId);
        this.user.cityId = null;
    }

    getUser(userId: number): void {
        this.userService
            .getUser(userId)
            .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
            );
    }

    // TODO: updatePartially
    onSubmit(form): void {
        if (form.valid) {

            this.submitted = true;

            this.userService
                .updateUser(this.user)
                .subscribe(
                    data => {
                        this.user = data;
                        this.submitted = false;
                        this.goBack();
                    },
                    error => {
                        this.errorMessage = <any>error;
                        this.submitted = false;
                    }
                );
        }
    }

    goBack(): void {
        window.history.back();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.user);
    }
}