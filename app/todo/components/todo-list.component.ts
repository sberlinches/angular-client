import { Component, Input } from '@angular/core';
// Services
import { TodoService } from './../services/todo.service';
// Components
import { TodoCheckboxComponent } from './todo-checkbox.component';
// Pipes
import { StatusPipe } from './../pipes/status.pipe';
import { FilterPipe } from './../pipes/filter.pipe';

@Component({
    selector: 'todo-list',
    pipes: [StatusPipe, FilterPipe],
    directives: [TodoCheckboxComponent],
    templateUrl: 'app/todo/views/todo-list.component.html'
})

export class TodoListComponent {

    // Creates an input data collector
    @Input() selectStatusValue;
    @Input() inputFilterValue;

    constructor(
        private todoService:TodoService
    ) {}
}