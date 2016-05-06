import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
// Interfaces
import { UserModel } from './../services/models/user.model';

@Component({
    selector: 'user-new',
    templateUrl: 'app/user/views/user-new.component.html'
})

export class UserNewComponent {

    countries = [
        {'value': 'canada', 'title': 'Canada'},
        {'value': 'japan', 'title': 'Japan'},
        {'value': 'spain', 'title': 'Spain'},
        {'value': 'united_states', 'title': 'United States'},
    ];

    user = new UserModel(50,'Kika','Hyangmin','kikahyangmin@example.com', this.countries[3].value);

    /*
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.user); }
    */
}