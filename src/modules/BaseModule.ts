import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { LorResponse } from '@/types';

/**
 * @name BaseModule
 * @description API instance to The One API
 * @requires accessToken {string} access token from https://the-one-api.dev/
 */
export abstract class BaseModule {
    protected theOneAPI: AxiosInstance;

    constructor(accessToken: string, protected endpoint?: string) {
        this.theOneAPI = axios.create({
            baseURL: 'https://the-one-api.dev/v2/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });
    }

    /**
     * @function getAll
     * @description get a list.
     * @param {number} limit
     * @param {number} offset
     */
    public getAll<T>(limit: number = 10, offset: number = 0): Promise<LorResponse<T>> {
        return this.theOneAPI.get<LorResponse<T>>(`/${this.endpoint}`, { params: { offset, limit } })
            .then(res => res.data);
    }

    /**
     * @function getById
     * @description get a primary item by id.
     * @param {string} id
     */
    public getById<T>(id: string): Promise<T | undefined> {
        return this.getOne<T>(`/${this.endpoint}/${id}`);
    }

    /**
     * @protected
     * @function getOne
     * @description get an item by url.
     * @param {string} url
     */
    protected getOne<T>(url: string): Promise<T | undefined> {
        return this.theOneAPI.get<LorResponse<T>>(url)
            .then((res) => res.data)
            .then((res) => res.docs?.[0]);
    }
}