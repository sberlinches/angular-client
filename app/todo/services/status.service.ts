import { Injectable } from 'angular2/core';
// Services
import { LoggerService } from './../../logger.service';
// Mocks(DB data)
import { StatusMock } from './mocks/status.mock';

@Injectable()
export class StatusService {

    constructor(
        private loggerService: LoggerService
    ) {}

    getStatuses() {
        this.loggerService.log(`Statuses in DB: ${StatusMock.length}`);
        return Promise.resolve(StatusMock);
    }
}