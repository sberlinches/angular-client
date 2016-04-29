import {Pipe} from "angular2/core";

@Pipe({
    name: 'status'
})

export class StatusPipe {
    transform(value, [status]) {
        console.log('Pipe status: ' + status);
        return value.filter((item) => item.status === status);
    }
}