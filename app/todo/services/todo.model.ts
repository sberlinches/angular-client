export class TodoModel {

    constructor(
        private title:string,
        public status:string = 'pending'
    ) {}
}