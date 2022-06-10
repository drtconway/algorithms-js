"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarjan = void 0;
class Tarjan {
    constructor(G) {
        this.G = G;
        this.sccs = [];
        this.nextIndex = 0;
        this.index = {};
        this.lowLink = {};
        this.stack = [];
        this.onStack = new Set();
        for (let v of this.G.V) {
            if (!(v in this.index)) {
                this.strong(v);
            }
        }
    }
    strong(v) {
        this.index[v] = this.nextIndex;
        this.lowLink[v] = this.nextIndex;
        this.nextIndex += 1;
        this.stack.push(v);
        this.onStack.add(v);
        for (let w of this.G.E[v] || []) {
            if (!(w in this.index)) {
                this.strong(w);
                this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
            }
            else if (this.onStack.has(w)) {
                this.lowLink[v] = Math.min(this.lowLink[v], this.index[w]);
            }
        }
        if (this.lowLink[v] == this.index[v]) {
            let scc = [];
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
function tarjan(G, sort = false) {
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
exports.tarjan = tarjan;
