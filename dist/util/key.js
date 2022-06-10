"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeKey = void 0;
function makeKey(x) {
    switch (typeof x) {
        case "number":
        case "string":
        case "symbol": {
            return x;
        }
        default: {
            return x.toString();
        }
    }
}
exports.makeKey = makeKey;
