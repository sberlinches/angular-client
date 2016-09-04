import { Component } from '@angular/core';
// Models
import { UserModel } from '../models/user.model';
// Services
import { UserService } from '../services/user.service';
import { CountryService } from '../../country/services/country.service';
import { StateService } from '../../state/services/state.service';
// Helpers
import { CountryStateCitySelectorHelper } from '../../shared/helpers/country_state_city-selector.helper';

@Component({
    selector: 'user-new',
    templateUrl: 'app/user/views/user-new.component.html'
})

export class UserNewComponent extends CountryStateCitySelectorHelper {

    //active = true;
    errorMessage: string;
    submitted: boolean = false;
    user: UserModel;
    todayDate: Date = new Date(); // TODO: External file

    constructor(
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

    /*
     Angular cannot distinguish between replacing the entire user and clearing the properties programmatically. Angular
     makes no assumptions and leaves the control in its current, dirty state.

     We'll have to reset the form controls manually with a small trick. We add an active flag to the component,
     initialized to true. When we add a new user, we toggle active false and then immediately back to true with a quick
     setTimeout.

     This is a temporary workaround while we await a proper form reset feature.
     */
    newUser(): void {
        this.user = new UserModel('', '', '', '');
        //this.active = false;
        //setTimeout(() => this.active = true, 0);
    }

    onSubmit(): void {
        alert(JSON.stringify(this.user));
    }

    goBack(): void {
        window.history.back();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.user);
    }
}