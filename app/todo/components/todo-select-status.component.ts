import { Component, Output, EventEmitter } from '@angular/core';
// Services
import { StatusService } from './../services/status.service';
// Interfaces
import { StatusModel } from './../models/status.model';

@Component({
    selector: 'todo-select-status',
    templateUrl: 'app/todo/views/todo-select-status.component.html'
})

export class TodoSelectStatusComponent {

    // Creates an output data emitter
    @Output() select = new EventEmitter();

    // Fill the variable with the interface
    statuses: StatusModel[];

    constructor(
        private statusService:StatusService
    ) {
        // Fill the variable with data
        this.statusService.getStatuses()
            .then(statuses => this.statuses = statuses);
    }

    // When the component is ready
    ngOnInit() {
        // TODO send data from html select value
        // Sends the select default value
        this.select.emit(this.statuses[0].value);
    }
}
