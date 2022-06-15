"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionFind = void 0;
const key_1 = require("../util/key");
class UnionFind {
    constructor(f = key_1.makeKey) {
        this.makeKey = f;
        this.parent = {};
        this.rank = {};
    }
    find(x) {
        const s = this.makeKey(x);
        if (!(s in this.parent)) {
            this.parent[s] = x;
            this.rank[s] = 0;
            return x;
        }
        let xp = this.parent[s];
        if (x !== xp) {
            this.parent[s] = this.find(xp);
        }
        return this.parent[s];
    }
    union(x, y) {
        let xr = this.find(x);
        let yr = this.find(y);
        if (xr === yr) {
            return xr;
        }
        const xrs = this.makeKey(xr);
        const yrs = this.makeKey(yr);
        let res = null;
        if (this.rank[xrs] < this.rank[yrs]) {
            this.parent[xrs] = yr;
            res = yr;
        }
        else if (this.rank[xrs] > this.rank[yrs]) {
            this.parent[yrs] = xr;
            res = xr;
        }
        else {
            this.parent[yrs] = xr;
            this.rank[xrs] += 1;
            res = xr;
        }
        return res;
    }
}
exports.UnionFind = UnionFind;
