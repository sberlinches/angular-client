import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { UserModel } from './../models/user.model';
import { CountryModel } from './../../country/models/country.model';
import { StateModel } from './../../state/models/state.model';
import { CityModel } from './../../city/models/city.model';
// Services
import { UserService } from './../services/user.service';
import { CountryService } from './../../country/services/country.service';
import { StateService } from './../../state/services/state.service';

@Component({
    selector: 'user-edit',
    templateUrl: 'app/user/views/user-edit.component.html'
})

export class UserEditComponent {

    userId: number;
    submitted: boolean = false;
    errorMessage: string;
    user: UserModel;
    countries: CountryModel[];
    states: StateModel[];
    cities: CityModel[];
    todayDate: Date = new Date();

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private countryService: CountryService,
        private stateService: StateService
    ) {

        this.route.params.forEach((params: Params) => {
            this.userId = +params['id'];
        });

    }

    ngOnInit(): void {
        this.getUser(this.userId);
    }

    /*
     * Country, state and city selector data on demand
     * 1. Loads the selectors data when they are requested (Until then they're only filled with the selected value)
     * 2. Reload the selectors data when the parent changes
     */
    onCountrySelect(): void {
        if(!this.countries) this.getCountries();
    }

    onStateSelect(countryId: number): void {
        if(!this.states) this.getStatesByCountry(countryId);
    }

    onCitySelect(stateId: number): void {
        if(!this.cities) this.getCitiesByState(stateId);
    }

    onCountryChange(countryId: any): void { // TODO: type number
        // TODO: Improve this dammit condition
        if(countryId != null && countryId != "null") this.getStatesByCountry(countryId);
        this.user.stateId = null;
        this.user.cityId = null;
    }

    onStateChange(stateId: any): void { // TODO: type number
        // TODO: Improve this dammit condition
        if(stateId != null && stateId != "null") this.getCitiesByState(stateId);
        this.user.cityId = null;
    }

    /*
     * Getters
     */
    getUser(userId: number): void {
        this.userService
            .getUser(userId)
            .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
            );
    }

    getCountries(): void {
        console.log('gimme countries');
        this.countryService
            .getCountries()
            .subscribe(
                countries => this.countries = countries,
                error => this.errorMessage = <any>error
            );
    }

    getStatesByCountry(countryId: number): void {
        console.log('gimme states');
        this.countryService
            .getStatesByCountry(countryId)
            .subscribe(
                states => this.states = states,
                error => this.errorMessage = <any>error
            );
    }

    getCitiesByState(stateId: number): void {
        console.log('gimme cites');
        this.stateService
            .getCitiesByState(stateId)
            .subscribe(
                cities => this.cities = cities,
                error => this.errorMessage = <any>error
            );
    }

    /*
     *
     */
    onSubmit(form): void {
        this.submitted = true;

        if (form.valid) {
            this.userService
                .updateUser(this.userId, form.value) // TODO: Get only the modified fields
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