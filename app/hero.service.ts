import { Injectable } from 'angular2/core';

import { LoggerService } from './logger.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    constructor(
        private _loggerService: LoggerService
    ) {}

    getHeroes() {
        this._loggerService.log(`Heroes in DB: ${HEROES.length}`);
        return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        this._loggerService.log(`Hero ID: ${id}`);
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}