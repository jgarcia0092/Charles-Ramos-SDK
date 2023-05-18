import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

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

    processResponse(res: AxiosResponse<any, any>) {
        return res.data;
    }
}