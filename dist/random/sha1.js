"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sha1Source = void 0;
const crypto_1 = require("crypto");
class Sha1Source {
    constructor(seed) {
        this.hex = seed.toString();
        this.bytes = [];
    }
    byte() {
        if (this.bytes.length == 0) {
            this.refill();
        }
        return this.bytes.pop();
    }
    refill() {
        const hash = (0, crypto_1.createHash)("sha1");
        hash.update(this.hex);
        this.hex = hash.digest("hex");
        for (let i = 0; i < this.hex.length; i += 2) {
            this.bytes.push(Number("0x" + this.hex.slice(i, i + 2)));
        }
    }
}
exports.Sha1Source = Sha1Source;
