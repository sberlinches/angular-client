export class DateFunctions {

    /**
     *
     * @param dateA
     * @param dateB
     * @returns {number}
     */
    diffBetween(dateA: Date, dateB: Date) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
        var utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());

        return utc2 - utc1;
    }

    /**
     *
     * @param milliseconds
     * @param format
     * @returns {number}
     */
    millisecondsTo(milliseconds: number, format: string) {

        var result: number;

        switch (format) {
            case 'second':
                result = milliseconds / 1000;
                break;
            case 'minute':
                result = milliseconds / 60000;
                break;
            case 'hour':
                result = milliseconds / 3600000;
                break;
            case 'day':
                result = milliseconds / 86400000;
                break;
            case 'week':
                result = milliseconds / 604800000;
                break;
            case 'month':
                result = milliseconds / 2627856000;
                break;
            case 'year':
                result = milliseconds / 31536000000;
                break;
            default:
                result = milliseconds;
        }

        return Math.floor(result);
    }
}