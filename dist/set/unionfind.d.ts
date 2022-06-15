import { Key } from "../util/key";
export declare class UnionFind<T> {
    private makeKey;
    private parent;
    private rank;
    constructor(f?: (x: T) => Key);
    find(x: T): T;
    union(x: T, y: T): T;
}
