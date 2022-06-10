"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinSource = void 0;
class BuiltinSource {
    byte() {
        return Math.floor(256 * Math.random());
    }
}
exports.BuiltinSource = BuiltinSource;
