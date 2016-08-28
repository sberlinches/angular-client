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

    /**
     * Calculates the difference between two dates.
     * Optionally, can be selected the return format.
     *
     * @param valueA SimpleDateFormat <yyyy-MM-dd'T'HH:mm:ss'Z'>
     * @param valueB SimpleDateFormat <yyyy-MM-dd'T'HH:mm:ss'Z'>
     * @param format millisecond(default), second, minute, hour, day, week, month, year
     * @returns {number}
     */
    transform(valueA: string, valueB: string, format: string) {

        if(valueA && valueB) {
            let dateA           = new Date(valueA);
            let dateB           = new Date(valueB);
            let milliseconds    = this.date.diffBetween(dateA, dateB);

            return this.date.millisecondsTo(milliseconds, format);
        }
    }
}