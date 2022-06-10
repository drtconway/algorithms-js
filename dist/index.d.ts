import * as gph from "./graph/graph";
export declare const graph: {
    tarjan<T>(G: gph.Graph<T>, sort?: boolean): T[][];
    Graph: typeof gph.Graph;
};
import * as uf from "./set/unionfind";
export declare const set: {
    NumberKey(x: number): string | number;
    StringKey(x: string): string | number;
    UnionFind: typeof uf.UnionFind;
};
