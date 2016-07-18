import { Pipe } from '@angular/core';
// Functions
import { DateFunctions } from './../../shared/functions/date.functions';

@Pipe({
    name: 'timeBetween'
})

export class TimeBetweenPipe {

    constructor(
        private date: DateFunctions
    ) {}

    transform(valueA: string, valueB: string, format: string) {

        if(valueA && valueB) {
            var dateA           = new Date(valueA);
            var dateB           = new Date(valueB);
            var milliseconds    = this.date.diffBetween(dateA, dateB);

            return this.date.millisecondsTo(milliseconds, format);
        }
    }
}