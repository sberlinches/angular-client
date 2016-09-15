import { Injectable } from '@angular/core';
// Services
import { LoggerService } from './../../shared/services/logger.service';
// Models
import { TodoModel } from './../models/todo.model';
// Mocks(DB data)
import { TodoMock } from './../mocks/todo.mock';

@Injectable()
export class TodoService{

    constructor(
        private loggerService: LoggerService
    ) {}

    addTodo(todo:TodoModel) {
        /*this.todos = [...this.todos, todo];*/
    }

    updateTodoStatus(todo:TodoModel) {

        /*// TODO Comment here
        const status = todo.status == 'done' ? 'pending' : 'done';
        const toggleStatus = Object.assign({}, todo, {status});

        // Refrescamos el array para la vista
        const i = this.todos.indexOf(todo);

        this.todos = [
            ...this.todos.slice(0, i),
            toggleStatus,
            ...this.todos.slice(i + 1)
        ];*/
    }
}