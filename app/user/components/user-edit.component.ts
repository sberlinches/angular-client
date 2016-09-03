import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { UserModel } from '../models/user.model';
// Services
import { UserService } from '../services/user.service';
import { CountryService } from '../../country/services/country.service';
import { StateService } from '../../state/services/state.service';
// Helpers
import { CountryStateCitySelectorHelper } from '../../shared/helpers/country_state_city-selector.helper';

@Component({
    selector: 'user-edit',
    templateUrl: 'app/user/views/user-edit.component.html'
})

export class UserEditComponent extends CountryStateCitySelectorHelper implements OnInit {

    errorMessage: string;
    submitted: boolean = false;
    user: UserModel;
    todayDate: Date = new Date();

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        protected countryService: CountryService,
        protected stateService: StateService
    ) {
        super(countryService, stateService);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.getUser(+params['id']);
        });
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
        this.submitted = true;

        if (form.valid) {
            this.userService
                .updateUser(this.user)
                .subscribe(
                    user => {
                        this.submitted = false;
                        window.history.back();
                    },
                    error => this.errorMessage = <any>error
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