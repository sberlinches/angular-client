import { Injectable } from 'angular2/core';

import { LoggerService } from './../../logger.service';
import { UserMock } from './mocks/user.mock';

@Injectable()
export class UserService {

    constructor(
        private _loggerService: LoggerService
    ) {}

    getUsers() {
        this._loggerService.log(`Users in DB: ${UserMock.length}`);
        return Promise.resolve(UserMock);
    }

    getUser(id: number) {
        this._loggerService.log(`User ID: ${id}`);
        return Promise.resolve(UserMock).then(
            users => users.filter(user => user.id === id)[0]
        );
    }
}