import { LorQuote, LorResponse } from '@/types';
import { BaseModule } from './BaseModule';

/**
 * @class
 * @name Quote
 * @description the module that manages endpoints under `/quote`.
 */
export class Quote extends BaseModule {
    constructor(accessToken: string) {
        super(accessToken);
    }

    /**
     * @function getAll
     * @description get a quote list.
     * @param {number} limit
     * @param {number} offset
     */
    getAll(limit: number = 1000, offset: number = 0) {
        return this.theOneAPI.get<LorResponse<LorQuote>>('/quote', { params: { limit, offset } })
            .then(this.processResponse);
    }

    /**
     * @function getById
     * @description get a quote by id.
     * @param {string} id
     */
    getById(id: string) {
        return this.theOneAPI.get<LorResponse<LorQuote>>(`/quote/${id}`)
            .then((res) => res.data)
            .then((res) => res.docs?.[0]);
    }
}