import './rxjs-operators';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
// Services
import { LoggerService } from './shared/services/logger.service';
import { UserService } from "./user/services/user.service";
import { CountryService } from "./country/services/country.service";
import { StateService } from "./state/services/state.service";
import { CityService } from "./city/services/city.service";
//import { StatusService } from './todo/services/status.service';
//import { TodoService } from './todo/services/todo.service';
// Components
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { UserListComponent } from './user/components/user-list.component';
import { UserDetailComponent } from './user/components/user-detail.component';
import { UserEditComponent } from './user/components/user-edit.component';
import { UserNewComponent } from './user/components/user-new.component';
//import { TodoComponent } from './todo/components/todo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        UserListComponent,
        UserDetailComponent,
        UserEditComponent,
        UserNewComponent,
        //TodoComponent
    ],
    providers: [
        LoggerService,
        UserService,
        CountryService,
        StateService,
        CityService,
        //StatusService,
        //TodoService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}