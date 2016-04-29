import { Component, Output, EventEmitter } from "angular2/core";

@Component({
    selector: 'todo-input-filter',
    templateUrl: 'app/todo/views/todo-input-filter.component.html'
})

export class TodoInputFilterComponent {

    // Creates an output data emitter
    @Output() input = new EventEmitter();

    // When the component is ready
    ngOnInit() {
        // TODO send data from html input value
        // Sends the filter default value
        this.input.emit('');
    }
}
