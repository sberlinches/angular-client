import { Injectable } from 'angular2/core';
// Models
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService{

    private todos:[TodoModel] = [
        new TodoModel('eat', 'done'),
        new TodoModel('sleep', 'done'),
        new TodoModel('code', 'pending'),
        new TodoModel('Code again', 'pending'),
        new TodoModel('swimming', 'done'),
        new TodoModel('die', 'pending'),
        new TodoModel('Get laid', 'pending'),
    ];

    addTodo(todo:TodoModel) {
        this.todos = [...this.todos, todo];
    }

    updateTodoStatus(todo:TodoModel) {

        // TODO Comment here
        const status = todo.status == 'done' ? 'pending' : 'done';
        const toggleStatus = Object.assign({}, todo, {status});

        // Refrescamos el array para la vista
        const i = this.todos.indexOf(todo);

        this.todos = [
            ...this.todos.slice(0, i),
            toggleStatus,
            ...this.todos.slice(i + 1)
        ];
    }
}