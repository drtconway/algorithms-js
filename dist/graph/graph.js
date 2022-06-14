"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const key_1 = require("../util/key");
class Graph {
    constructor(vertices, edges, keyMaker = key_1.makeKey) {
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
            this.E[k] = new Set();
        }
        for (const e of edges) {
            const k1 = this.keyMaker(e[0]);
            const k2 = this.keyMaker(e[1]);
            this.E[k1].add(k2);
        }
    }
}
exports.Graph = Graph;
