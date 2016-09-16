import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userRouting } from './user.routing';

import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserEditComponent } from './components/user-edit.component';
import { UserNewComponent } from './components/user-new.component';

import { UserService } from "./services/user.service";
import { CountryService } from "./../country/services/country.service";
import { StateService } from "./../state/services/state.service";
import { CityService } from "./../city/services/city.service";

import { TimeBetweenPipe } from './../shared/pipes/timeBetween.pipe';

import { DateFunctions } from './../shared/functions/date.functions';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        userRouting
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserDetailComponent,
        UserEditComponent,
        UserNewComponent,
        TimeBetweenPipe
    ],
    providers: [
        UserService,
        CountryService,
        StateService,
        CityService,
        DateFunctions
    ]
})

export class UserModule {}