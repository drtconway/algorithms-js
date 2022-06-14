"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
class Deque {
    constructor() {
        this.frontQ = [];
        this.backQ = [];
    }
    size() {
        return this.frontQ.length + this.backQ.length;
    }
    push_front(x) {
        this.frontQ.push(x);
    }
    push_back(x) {
        this.backQ.push(x);
    }
    pop_front() {
        if (this.frontQ.length == 0) {
            while (this.backQ.length > 0) {
                const x = this.backQ.pop();
                this.frontQ.push(x);
            }
        }
        return this.frontQ.pop();
    }
    pop_back() {
        if (this.backQ.length == 0) {
            while (this.frontQ.length > 0) {
                const x = this.frontQ.pop();
                this.backQ.push(x);
            }
        }
        return this.backQ.pop();
    }
    [Symbol.iterator]() {
        const dup = [...[...this.frontQ].reverse(), ...this.backQ];
        let idx = -1;
        return {
            next: () => ({ value: dup[++idx], done: !(idx in dup) }),
        };
    }
}
exports.Deque = Deque;
