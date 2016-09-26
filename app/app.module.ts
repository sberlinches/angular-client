import './rxjs-operators';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        SharedModule,
        LoginModule,
        AdminModule,
        DashboardModule,
        UserModule,
    ],
    declarations: [ AppComponent ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}