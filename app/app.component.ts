import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroNewComponent } from './hero-new.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'HeroList',
        component: HeroListComponent
    },
    {
        path: '/hero/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/hero/new',
        name: 'HeroNew',
        component: HeroNewComponent
    },
])

export class AppComponent {
    title = 'Tour of Heroes';
}