import { BaseModule } from './BaseModule';

/**
 * @name Quote
 * @description the module that manages endpoints under `/quote`.
 */
export class Quote extends BaseModule {
    constructor(accessToken: string) {
        super(accessToken);
    }

    getAll(limit: number = 1000, offset: number = 0) {
        return this.theOneAPI.get('/quote', { params: { limit, offset } }).then(this.processResponse);
    }

    getById = (id: string) => {
        return this.theOneAPI.get(`/quote/${id}`).then(this.processResponse);
    }
}