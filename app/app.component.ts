import { Component, OnInit, DoCheck } from '@angular/core';
import { WebStorageService } from './shared/services/web-storage.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit, DoCheck {

    user;

    constructor(
        public webStorageService: WebStorageService
    ){}

    ngOnInit() {
        this.user = this.webStorageService.getItem('user');
    }

    ngDoCheck() {
        this.user = this.webStorageService.getItem('user');
    }
}