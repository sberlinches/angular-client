import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
// Interfaces
import { UserModel } from './../services/models/user.model';

@Component({
    selector: 'user-new',
    templateUrl: 'app/user/views/user-new.component.html'
})

export class UserNewComponent {

    active = true;

    countries = [
        {'value': 'canada', 'title': 'Canada'},
        {'value': 'japan', 'title': 'Japan'},
        {'value': 'spain', 'title': 'Spain'},
        {'value': 'united_states', 'title': 'United States'},
    ];

    user = new UserModel(50, 'name', 'lastname', 'mail@example.com', this.countries[3].value);

    /*
     Angular cannot distinguish between replacing the entire user and clearing the properties programmatically. Angular
     makes no assumptions and leaves the control in its current, dirty state.

     We'll have to reset the form controls manually with a small trick. We add an active flag to the component,
     initialized to true. When we add a new user, we toggle active false and then immediately back to true with a quick
     setTimeout.

     This is a temporary workaround while we await a proper form reset feature.
     */
    newUser() {
        this.user = new UserModel(51, '', '', '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    onSubmit() {
        alert(JSON.stringify(this.user));
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.user);
    }
}