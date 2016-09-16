import { Component } from '@angular/core';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { CountryService } from '../../country/services/country.service';
import { StateService } from '../../state/services/state.service';

import { CountryStateCitySelectorHelper } from '../../shared/helpers/country_state_city-selector.helper';

@Component({
    selector: 'user-new',
    templateUrl: 'app/user/views/user-new.component.html'
})

export class UserNewComponent extends CountryStateCitySelectorHelper {

    errorMessage: string;
    user: UserModel;
    todayDate: Date = new Date(); // TODO: External file

    constructor(
        private userService: UserService,
        protected countryService: CountryService,
        protected stateService: StateService
    ) {
        super(countryService, stateService);
    }

    ngOnInit(): void {
        this.newUser();
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

    newUser(): void {
        this.user = new UserModel(null, null, null, null);
    }

    // TODO: Creation in batch "Save and new again"
    onSubmit(form): void {
        if (form.valid) {
            this.userService
                .createUser(this.user)
                .subscribe(
                    data => {
                        this.user = data;
                        this.goBack();
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