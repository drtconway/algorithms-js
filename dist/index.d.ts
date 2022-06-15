import * as gph from "./graph/graph";
export declare const graph: {
    randomUniform<T>(rng: rnd.Random, V: T[], p: number): gph.Graph<T>;
    tsort<T_1>(G: gph.Graph<T_1>): T_1[];
    tarjan<T_2>(G: gph.Graph<T_2>, sort?: boolean): T_2[][];
    Graph: typeof gph.Graph;
};
export declare const list: {
    range(fst: number, snd?: number, trd?: number): Generator<number, any, unknown>;
};
import * as rnd from "./random/random";
import * as bs from "./random/builtin";
import * as sha1s from "./random/sha1";
export declare const random: {
    Sha1Source: typeof sha1s.Sha1Source;
    BuiltinSource: typeof bs.BuiltinSource;
    Random: typeof rnd.Random;
};
import * as uf from "./set/unionfind";
export declare const set: {
    NumberKey(x: number): string | number;
    StringKey(x: string): string | number;
    UnionFind: typeof uf.UnionFind;
    union<T>(...ss: Set<T>[]): Set<T>;
    intersection<T_1>(...ss: Set<T_1>[]): Set<T_1>;
    difference<T_2>(xs: Set<T_2>, ys: Set<T_2>): Set<T_2>;
};
import * as uk from "./util/key";
export declare const util: {
    makeKey(x: any): uk.Key;
};
