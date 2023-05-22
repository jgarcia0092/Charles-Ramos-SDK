import { BaseModule } from './BaseModule';

/**
 * @class
 * @name Quote
 * @description the module that manages endpoints under `/quote`.
 */
export class Quote extends BaseModule {
    constructor(accessToken: string) {
        super(accessToken, 'quote');
    }
}