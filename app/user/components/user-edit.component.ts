import { Component, OnInit } from '@angular/core';
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

export class UserEditComponent implements OnInit {

    userId: number;
    submitted: boolean = false;
    errorMessage: string;
    user: UserModel;
    countries: CountryModel[] = [];
    states: StateModel[] = [];
    cities: CityModel[] = [];
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
        if(this.countries.length === 0) this.getCountries();
    }

    onStateSelect(countryId: number): void {
        if(this.states.length === 0) this.getStatesByCountry(countryId);
    }

    onCitySelect(stateId: number): void {
        if(this.cities.length === 0) this.getCitiesByState(stateId);
    }

    onCountryChange(countryId: number): void {
        if(countryId) this.getStatesByCountry(countryId);
        this.user.stateId = null;
        this.user.cityId = null;
        this.states = [];
        this.cities = [];
    }

    onStateChange(stateId: number): void {
        if(stateId) this.getCitiesByState(stateId);
        this.user.cityId = null;
        this.cities = [];
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
        this.countryService
            .getCountries()
            .subscribe(
                countries => this.countries = countries,
                error => this.errorMessage = <any>error
            );
    }

    getStatesByCountry(countryId: number): void {
        this.countryService
            .getStatesByCountry(countryId)
            .subscribe(
                states => this.states = states,
                error => this.errorMessage = <any>error
            );
    }

    getCitiesByState(stateId: number): void {
        this.stateService
            .getCitiesByState(stateId)
            .subscribe(
                cities => this.cities = cities,
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