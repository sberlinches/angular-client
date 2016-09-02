export class DateFunctions {

    /**
     * Difference in milliseconds between two given dates.
     *
     * @param dateA SimpleDateFormat <yyyy-MM-dd'T'HH:mm:ss'Z'>
     * @param dateB SimpleDateFormat <yyyy-MM-dd'T'HH:mm:ss'Z'>
     * @returns {number}
     */
    diffBetween(dateA: Date, dateB: Date): number {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
        var utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

        return utc2 - utc1;
    }

    /**
     * Conversion from milliseconds to the given format.
     *
     * @param milliseconds
     * @param format toMilliseconds(default), toSeconds, toMinutes, toHours, toDays, toWeeks, toMonths, toYears
     * @returns {number}
     */
    millisecondsTo(milliseconds: number, format: string): number {

        var result: number;

        switch (format) {
            case 'toMilliseconds':
                result = milliseconds;
                break;
            case 'toSeconds':
                result = milliseconds / 1000;
                break;
            case 'toMinutes':
                result = milliseconds / 60000;
                break;
            case 'toHours':
                result = milliseconds / 3600000;
                break;
            case 'toDays':
                result = milliseconds / 86400000;
                break;
            case 'toWeeks':
                result = milliseconds / 604800000;
                break;
            case 'toMonths':
                result = milliseconds / 2627856000;
                break;
            case 'toYears':
                result = milliseconds / 31536000000;
                break;
            default:
                result = milliseconds;
        }

        return Math.floor(result);
    }
}