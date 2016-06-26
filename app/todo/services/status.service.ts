import { Injectable } from '@angular/core';
// Services
import { LoggerService } from './../../shared/services/logger.service';
// Mocks(DB data)
import { StatusMock } from './../mocks/status.mock';

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