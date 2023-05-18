import { LordOfRings } from '../index';
import * as dotenv from 'dotenv';

dotenv.config();

test('Access token is required for SDK initialization', () => {
    try {
        const lordOfRings = new LordOfRings('');
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e: any) {
        expect(e.message).toContain('Access token is required');
    }
});

describe('Movie module', () => {
    const lordOfRings = new LordOfRings(process.env.ACCESS_TOKEN!);
    const movieId = '5cd95395de30eff6ebccde5c';

    test('can get all movies', () => {
        return lordOfRings.movie.getAll()
            .then(res => {
                expect(res).toHaveProperty('docs');
                expect(res).toHaveProperty('total');
                expect(res).toHaveProperty('offset');
                expect(res).toHaveProperty('limit');
            });
    });

    test('can get movies with limit', () => {
        const limit = 2;
        return lordOfRings.movie.getAll(2)
            .then(res => {
                expect(res.docs).toHaveLength(limit);
            });
    });

    test('can get a movie by id', () => {
        return lordOfRings.movie.getById(movieId)
            .then(res => {
                expect(res).toHaveProperty('docs');
                expect(res).toHaveProperty('total');
                expect(res).toHaveProperty('limit');
                expect(res).toHaveProperty('offset');
                expect(res).toHaveProperty('page');
                expect(res).toHaveProperty('pages');
                expect(res.docs[0]._id).toEqual(movieId);
            });
    });

    test('can get movie quotes by id', () => {
        return lordOfRings.movie.getQuoteById(movieId)
            .then(res => {
                expect(res).toHaveProperty('docs');
                expect(res).toHaveProperty('total');
                expect(res).toHaveProperty('limit');
                expect(res).toHaveProperty('offset');
            });
    });
});

describe('Quote module', () => {
    const lordOfRings = new LordOfRings(process.env.ACCESS_TOKEN!);
    const quoteId = '5cd96e05de30eff6ebcce7e9';

    test('can get all quotes', () => {
        return lordOfRings.quote.getAll()
            .then(res => {
                expect(res).toHaveProperty('docs');
                expect(res).toHaveProperty('total');
                expect(res).toHaveProperty('offset');
                expect(res).toHaveProperty('limit');
            });
    });

    test('can get quotes with limit', () => {
        const limit = 2;
        return lordOfRings.movie.getAll(2)
            .then(res => {
                expect(res.docs).toHaveLength(limit);
            });
    });

    test('can get a quote by id', () => {
        return lordOfRings.movie.getById(quoteId)
            .then(res => {
                expect(res).toHaveProperty('docs');
                expect(res).toHaveProperty('total');
                expect(res).toHaveProperty('limit');
                expect(res).toHaveProperty('offset');
                expect(res).toHaveProperty('page');
                expect(res).toHaveProperty('pages');
            });
    });
});
