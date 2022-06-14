"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsort = void 0;
class Tarjan {
    constructor(G) {
        this.G = G;
        this.perm = new Set();
        this.temp = new Set();
        this.Lrev = [];
        for (const v of this.G.V) {
            if (this.perm.has(v) || this.temp.has(v)) {
                continue;
            }
            this.visit(v);
        }
    }
    visit(v) {
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
function tsort(G) {
    const T = new Tarjan(G);
    const L = T.Lrev;
    return L.reverse();
}
exports.tsort = tsort;
