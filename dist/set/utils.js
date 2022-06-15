"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = exports.intersection = exports.union = void 0;
function union(...ss) {
    const res = new Set();
    for (const s of ss) {
        for (const x of s) {
            res.add(x);
        }
    }
    return res;
}
exports.union = union;
function intersection(...ss) {
    let res = new Set();
    if (ss.length == 0) {
        return res;
    }
    for (const x of ss[0]) {
        res.add(x);
    }
    for (let i = 1; i < ss.length && res.size > 0; ++i) {
        const tmp = new Set();
        for (const x of res) {
            if (ss[i].has(x)) {
                tmp.add(x);
            }
        }
        res = tmp;
    }
    return res;
}
exports.intersection = intersection;
function difference(xs, ys) {
    const res = new Set();
    for (const x of xs) {
        if (!ys.has(x)) {
            res.add(x);
        }
    }
    return res;
}
exports.difference = difference;
