export declare function NumberKey(x: number): string | number;
export declare function StringKey(x: string): string | number;
export declare class UnionFind<T> {
    private makeKey;
    private parent;
    private rank;
    constructor(makeKey: (x: T) => string | number);
    find(x: T): T;
    union(x: T, y: T): T;
}
