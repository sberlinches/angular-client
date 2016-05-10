import { Injectable } from '@angular/core';
// Services
import { LoggerService } from './../../shared/services/logger.service';
// Mocks(DB data)
import { UserMock } from './mocks/user.mock';

@Injectable()
export class UserService {

    constructor(
        private loggerService: LoggerService
    ) {}

    getUsers() {
        this.loggerService.log(`Users in DB: ${UserMock.length}`);

        return Promise.resolve(UserMock);
    }

    getUser(id: number) {
        this.loggerService.log(`User ID: ${id}`);

        return Promise.resolve(UserMock).then(
            users => users.filter(user => user.id === id)[0]
        );
    }
}