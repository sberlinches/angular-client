import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated'; // TODO: Changes to the new router component
import { NgForm } from '@angular/common';

import { UserService } from './../services/user.service';
import { CountryService } from './../../country/services/country.service';
import { StateService } from './../../state/services/state.service';

import { UserModel } from './../models/user.model';
import { CountryModel } from './../../country/models/country.model';
import { StateModel } from './../../state/models/state.model';
import { CityModel } from './../../city/models/city.model';

@Component({
    selector: 'user-edit',
    templateUrl: 'app/user/views/user-edit.component.html'
})

export class UserEditComponent {

    errorMessage: string;
    user: UserModel;
    countries: CountryModel[];
    states: StateModel[];
    cities: CityModel[];

    constructor(
        private routeParams: RouteParams,
        private userService: UserService,
        private countryService: CountryService,
        private stateService: StateService
    ) {}

    ngOnInit() {
        var userId = +this.routeParams.get('id');
        this.getUser(userId);
    }

    /*
     * Country, state and city selector data on demand
     * 1. Loads the selectors data when they are requested (Until then they're only filled with the selected value)
     * 2. Reload the selectors data when the parent changes
     */
    onCountrySelect() {
        if(!this.countries) this.getCountries();
    }

    onStateSelect(countryId: number) {
        if(!this.states) this.getStatesByCountry(countryId);
    }

    onCitySelect(stateId: number) {
        if(!this.cities) this.getCitiesByState(stateId);
    }

    onCountryChange(countryId: any) { // TODO: type number
        // TODO: Improve this dammit condition
        if(countryId != null && countryId != "null") this.getStatesByCountry(countryId);
        this.user.stateId = null;
        this.user.cityId = null;
    }

    onStateChange(stateId: any) { // TODO: type number
        // TODO: Improve this dammit condition
        if(stateId != null && stateId != "null") this.getCitiesByState(stateId);
        this.user.cityId = null;
    }

    /*
     * Getters
     */
    getUser(userId: number) {
        this.userService
            .getUser(userId)
            .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
            );
    }

    getCountries() {
        console.log('gimme countries');
        this.countryService
            .getCountries()
            .subscribe(
                countries => this.countries = countries,
                error => this.errorMessage = <any>error
            );
    }

    getStatesByCountry(countryId: number) {
        console.log('gimme states');
        this.countryService
            .getStatesByCountry(countryId)
            .subscribe(
                states => this.states = states,
                error => this.errorMessage = <any>error
            );
    }

    getCitiesByState(stateId: number) {
        console.log('gimme cites');
        this.stateService
            .getCitiesByState(stateId)
            .subscribe(
                cities => this.cities = cities,
                error => this.errorMessage = <any>error
            );
    }

    //submitted = false;
    //onSubmit() { this.submitted = true; }


    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.user);
    }
}