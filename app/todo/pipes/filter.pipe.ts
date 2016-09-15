import {Pipe} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe {
    transform(value, [term]) {
        return value.filter((item) => item.title.startsWith(term));
    }
}