import { Graph } from "./graph";
import { Key } from "../util/key";

class Tarjan<T> {
  G: Graph<T>;
  perm: Set<Key>;
  temp: Set<Key>;
  Lrev: T[];

  constructor(G: Graph<T>) {
    this.G = G;
    this.perm = new Set<Key>();
    this.temp = new Set<Key>();
    this.Lrev = [];

    for (const v of this.G.V) {
      if (this.perm.has(v) || this.temp.has(v)) {
        continue;
      }
      this.visit(v);
    }
  }

  visit(v: Key): void {
    if (this.perm.has(v)) {
      return;
    }
    if (this.temp.has(v)) {
      throw new Error(`graph contains cycles`);
    }
    this.temp.add(v);
    for (const w of this.G.E[v]) {
      this.visit(w);
    }
    this.temp.delete(v);
    this.perm.add(v);
    this.Lrev.push(this.G.vertexIndex[v]);
  }
}

export function tsort<T>(G: Graph<T>): T[] {
  const T = new Tarjan(G);
  const L = T.Lrev;
  return L.reverse();
}
