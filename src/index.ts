import { Movie, Quote } from './modules';

export class LordOfMovie {
    public movie: Movie;
    public quote: Quote;

    constructor(accessToken: string) {
        if (!accessToken) {
            throw new Error(`Access token is required to initialize the SDK! Please check out documentation for more details. https://the-one-api.dev/documentation`);
        }

        this.movie = new Movie(accessToken);
        this.quote = new Quote(accessToken);
    }
}

export default LordOfMovie;