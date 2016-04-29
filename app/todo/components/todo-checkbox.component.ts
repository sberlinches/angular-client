import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'todo-checkbox',
    templateUrl: 'app/todo/views/todo-checkbox.component.html'
})

export class TodoCheckboxComponent {

    // Creates an input data collector
    @Input() todo;

    // Creates an output data emitter
    @Output() toggle = new EventEmitter();
}