import './rxjs-operators';
// Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
// Components
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        appRoutingProviders,
        DashboardModule,
        UserModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {}