import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import type { LorResponse } from '@/types';

/**
 * @name BaseModule
 * @description API instance to The One API
 * @requires accessToken {string} access token from https://the-one-api.dev/
 */
export class BaseModule {
    protected theOneAPI: AxiosInstance;
    constructor(accessToken: string) {
        this.theOneAPI = axios.create({
            baseURL: 'https://the-one-api.dev/v2/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });
    }

    processResponse<T>(res: AxiosResponse<LorResponse<T>, any>) {
        return res.data;
    }
}