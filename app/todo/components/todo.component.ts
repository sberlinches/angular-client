import { Component } from '@angular/core';
// Services
import { TodoService } from './../services/todo.service';
// Models
import { TodoModel } from './../models/todo.model';
// Components
import { TodoListComponent } from './todo-list.component';
import { TodoSelectStatusComponent } from './todo-select-status.component';
import { TodoInputFilterComponent } from './todo-input-filter.component';

@Component({
    selector: 'todo',
    templateUrl: 'app/todo/views/todo.component.html',
    directives: [TodoListComponent, TodoSelectStatusComponent, TodoInputFilterComponent] // Inject components into this
})

export class TodoComponent {

    //todoModel: TodoModel = new TodoModel();

    /*
    * Injecting a service
    * 1. Import at bootstrap (main.ts) or application (app.component) level and add to providers
    * 2. Import in your component
    * */
    constructor(
        private todoService:TodoService
    ) {}

    printValue(event, value) {
        console.log(event, value);
    }

    addValue(value) {
        /*this.todoService.addTodo(value);
        console.log(this.todoService.todos);
        // Refesh the array
        this.todoModel = new TodoModel();*/
    }

    onSubmit() {
        //this.addValue(this.todoModel);
    }
}