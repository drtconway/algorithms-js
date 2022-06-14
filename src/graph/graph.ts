import {Key, makeKey } from "../util/key";

export class Graph<T> {
  readonly keyMaker: (x: T) => Key;
  readonly vertices: T[];

  vertexIndex: { [key: Key]: T };
  V: Key[];
  E: { [key: Key]: Set<Key> };

  constructor(vertices: T[], edges: [T, T][], keyMaker: (x: T) => Key = makeKey) {
    this.keyMaker = keyMaker;
    this.vertices = vertices;
    this.vertexIndex = {};

    this.V = [];
    this.E = {};
    for (const v of this.vertices) {
      const k = this.keyMaker(v);
      if (k in this.vertexIndex) {
        throw new Error(`duplicate vertex: '${v}' (${String(k)}).`);
      }
      this.vertexIndex[k] = v;
      this.V.push(k);
      this.E[k] = new Set<Key>();
    }

    for (const e of edges) {
      const k1 = this.keyMaker(e[0]);
      const k2 = this.keyMaker(e[1]);
      this.E[k1].add(k2);
    }
  }
}
