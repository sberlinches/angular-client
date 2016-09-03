// Models
import { CountryModel } from '../../country/models/country.model';
import { StateModel } from '../../state/models/state.model';
import { CityModel } from '../../city/models/city.model';
// Services
import { CountryService } from '../../country/services/country.service';
import { StateService } from '../../state/services/state.service';

/*
 * Country, state and city selector data on demand
 * 1. Loads the selectors data when they are requested (Until then they're only filled with the selected value)
 * 2. Reload the selectors data when the parent changes
 */
export class CountryStateCitySelectorHelper {

    errorMessage: string;
    countries: CountryModel[] = [];
    states: StateModel[] = [];
    cities: CityModel[] = [];

    constructor(
        protected countryService: CountryService,
        protected stateService: StateService
    ) {}

    onCountrySelect(): void {
        if(!this.countries.length) this.getCountries();
    }

    onStateSelect(countryId: number): void {
        if(!this.states.length) this.getStatesByCountry(countryId);
    }

    onCitySelect(stateId: number): void {
        if(!this.cities.length) this.getCitiesByState(stateId);
    }

    onCountryChange(countryId: number): void {
        if(countryId) this.getStatesByCountry(countryId);
        this.states = [];
        this.cities = [];
    }

    onStateChange(stateId: number): void {
        if(stateId) this.getCitiesByState(stateId);
        this.cities = [];
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
}