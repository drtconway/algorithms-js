"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUniform = void 0;
const graph_1 = require("./graph");
function randomUniform(rng, V, p) {
    const E = [];
    for (let i = 0; i < V.length; ++i) {
        for (let j = 0; j < V.length; ++j) {
            if (i == j) {
                continue;
            }
            const u = rng.random();
            if (u < p) {
                E.push([V[i], V[j]]);
            }
        }
    }
    return new graph_1.Graph(V, E);
}
exports.randomUniform = randomUniform;
