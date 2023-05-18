import { BaseModule } from './BaseModule';

/**
 * @name Movie
 * @description the module that manages endpoints under `/movie`.
 */
export class Movie extends BaseModule {
    constructor(accessToken: string) {
        super(accessToken);
    }

    getAll = (limit: number = 1000, offset: number = 0) => {
        return this.theOneAPI.get('/movie', { params: { offset, limit } })
            .then(this.processResponse);
    }

    getById = (id: string) => {
        return this.theOneAPI.get(`/movie/${id}`).then(this.processResponse);
    }

    getQuoteById = (id: string) => {
        return this.theOneAPI.get(`/movie/${id}/quote`).then(this.processResponse);
    }
}