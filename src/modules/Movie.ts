import { LorMovie, LorQuote, LorResponse } from '@/types';
import { BaseModule } from './BaseModule';

/**
 * @class
 * @name Movie
 * @description the module that manages endpoints under `/movie`.
 */
export class Movie extends BaseModule {
    constructor(accessToken: string) {
        super(accessToken);
    }

    /**
     * @function getAll
     * @description get a movie list.
     * @param {number} limit
     * @param {number} offset
     */
    public getAll(limit: number = 1000, offset: number = 0) {
        return this.theOneAPI.get<LorResponse<LorMovie>>('/movie', { params: { offset, limit } })
            .then(this.processResponse);
    }

    /**
     * @function getById
     * @description get a movie by id.
     * @param {string} id
     */
    getById(id: string) {
        return this.theOneAPI.get<LorResponse<LorMovie>>(`/movie/${id}`)
            .then((res) => res.data)
            .then((res) => res.docs?.[0]);
    }

    /**
     * @function getQuoteById
     * @description get a movie quote by id.
     * @param {string} id
     */
    getQuoteById(id: string) {
        return this.theOneAPI.get<LorResponse<LorQuote>>(`/movie/${id}/quote`)
            .then((res) => res.data)
            .then((res) => res.docs?.[0]);
    }
}
