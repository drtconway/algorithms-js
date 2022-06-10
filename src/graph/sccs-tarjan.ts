import { Graph } from "./graph";
import { Key } from "../util/key";

class Tarjan<T> {
  G: Graph<T>;
  sccs: T[][];

  private nextIndex: number;
  private index: { [key: Key]: number };
  private lowLink: { [key: Key]: number };
  private stack: Key[];
  private onStack: Set<Key>;

  constructor(G: Graph<T>) {
    this.G = G;
    this.sccs = [];
    this.nextIndex = 0;
    this.index = {};
    this.lowLink = {};
    this.stack = [];
    this.onStack = new Set<Key>();
    for (let v of this.G.V) {
      if (!(v in this.index)) {
        this.strong(v);
      }
    }
  }

  strong(v: Key) {
    this.index[v] = this.nextIndex;
    this.lowLink[v] = this.nextIndex;
    this.nextIndex += 1;
    this.stack.push(v);
    this.onStack.add(v);

    for (let w of this.G.E[v] || []) {
      if (!(w in this.index)) {
        this.strong(w);
        this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
      } else if (this.onStack.has(w)) {
        this.lowLink[v] = Math.min(this.lowLink[v], this.index[w]);
      }
    }

    if (this.lowLink[v] == this.index[v]) {
      let scc: T[] = [];
      while (true) {
        let w = this.stack.pop();
        this.onStack.delete(w);
        scc.push(this.G.vertexIndex[w]);
        if (w == v) {
          break;
        }
      }
      this.sccs.push(scc);
    }
  }
}

export function tarjan<T>(G: Graph<T>, sort: boolean = false): T[][] {
  let T = new Tarjan(G);
  const sccs = T.sccs;
  if (sort) {
    for (let i = 0; i < sccs.length; ++i) {
      sccs[i].sort();
    }
    sccs.sort();
  }
  return sccs;
}
