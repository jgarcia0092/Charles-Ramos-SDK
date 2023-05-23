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

export type PaginationParams = {
    limit?: number;
    offset?: number;
    page?: number;
}

export type FilterParams = {
    match: string;
    negateMatch: string;
    include: string;
    exclude: string;
    exists: string;
    doesNotExist: string;
}

export type SortParams = {
    field: keyof LorMovie | keyof LorQuote;
    direction: SortDirection;
}

export enum SortDirection {
    asc, desc
}