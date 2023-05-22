import { LorQuote } from '@/types';
import { BaseModule } from './BaseModule';

/**
 * @class
 * @name Movie
 * @description the module that manages endpoints under `/movie`.
 */
export class Movie extends BaseModule {
    constructor(accessToken: string) {
        super(accessToken, 'movie');
    }

    /**
     * @function getQuoteById
     * @description get a movie quote by id.
     * @param {string} id
     */
    getQuoteById(id: string) {
        return this.getOne<LorQuote>(`/${this.endpoint}/${id}/quote`);
    }
}
