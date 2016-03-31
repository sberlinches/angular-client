import { Injectable } from 'angular2/core';

import { LoggerService } from './logger.service';
import { HeroMock } from './hero.mock';
import { HeroInterface } from './hero.interface';

@Injectable()
export class HeroService {

    constructor(
        private _loggerService: LoggerService
    ) {}

    getHeroes() {
        this._loggerService.log(`Heroes in DB: ${HeroMock.length}`);
        return Promise.resolve(HeroMock);
    }

    getHero(id: number) {
        this._loggerService.log(`Hero ID: ${id}`);
        return Promise.resolve(HeroMock).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}