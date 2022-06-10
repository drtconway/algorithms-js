import { Key } from "../util/key";
export declare class Graph<T> {
    readonly keyMaker: (x: T) => Key;
    readonly vertices: T[];
    vertexIndex: {
        [key: Key]: T;
    };
    V: Key[];
    E: {
        [key: Key]: Set<Key>;
    };
    constructor(vertices: T[], edges: [T, T][], keyMaker?: (x: T) => Key);
}
