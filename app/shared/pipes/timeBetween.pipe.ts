import { Pipe, PipeTransform } from '@angular/core';
// Functions
import { DateFunctions } from './../../shared/functions/date.functions';

/*
 * Calculates the difference between two dates.
 * Optionally, can be selected the return format.
 *
 * Usage:
 *   valueA | timeBetween: valueB: format
 * Example:
 *   {{ '1983-11-12T00:00:00Z' | timeBetween: '2016-11-12T00:00:00Z': 'toYears' }}
 */
@Pipe({name: 'timeBetween'})
export class TimeBetweenPipe implements PipeTransform {

    constructor(
        private date: DateFunctions
    ) {}

    /**
     * @param valueA SimpleDateFormat <yyyy-MM-dd'T'HH:mm:ss'Z'>
     * @param valueB SimpleDateFormat <yyyy-MM-dd'T'HH:mm:ss'Z'>
     * @param format toMilliseconds(default), toSeconds, toMinutes, toHours, toDays, toWeeks, toMonths, toYears
     * @returns {number}
     */
    transform(valueA: string, valueB: string, format: string): number {

        if(valueA && valueB) {
            let dateA           = new Date(valueA);
            let dateB           = new Date(valueB);
            let milliseconds    = this.date.diffBetween(dateA, dateB);

            return this.date.millisecondsTo(milliseconds, format);
        }
    }
}