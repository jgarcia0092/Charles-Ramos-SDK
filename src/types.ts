export type LorResponse<T> = {
    docs: T[];
    total: number;
    limit: number;
    offset?: number;
    page?: number;
    pages?: number;
}

export type LorMovie = {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}

export type LorQuote = {
    _id: string;
    dialog: string;
    movie: number;
    character: number;
    id: number;
}