export interface RandomSource {
    byte: () => number;
}
export declare class Random {
    source: RandomSource;
    constructor(source: RandomSource);
    random(): number;
    randint(begin: number, end: number): number;
    shuffle<T>(xs: T[]): T[];
}
