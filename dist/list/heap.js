"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = exports.reverseNumericCompare = exports.numericCompare = exports.defaultCompare = void 0;
function defaultCompare(lhs, rhs) {
    if (lhs < rhs) {
        return -1;
    }
    if (lhs > rhs) {
        return 1;
    }
    return 0;
}
exports.defaultCompare = defaultCompare;
function numericCompare(lhs, rhs) {
    return lhs - rhs;
}
exports.numericCompare = numericCompare;
function reverseNumericCompare(lhs, rhs) {
    return rhs - lhs;
}
exports.reverseNumericCompare = reverseNumericCompare;
class Heap {
    constructor(items, comparator = defaultCompare) {
        this.items = [...items];
        this.compare = comparator;
        this.heapify();
    }
    size() {
        return this.items.length;
    }
    heapify() {
        const z = this.items.length;
        for (let i = 1; i <= z; ++i) {
            this.upheap(i);
        }
    }
    front() {
        return this.items[0];
    }
    push(item) {
        this.items.push(item);
        this.upheap(this.items.length);
    }
    pop() {
        const res = this.items[0];
        const last = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = last;
            this.downheap(1);
        }
        return res;
    }
    upheap(i) {
        let p = i >> 1;
        while (p >= 1 && this.compare(this.items[i - 1], this.items[p - 1]) < 0) {
            const tmp = this.items[i - 1];
            this.items[i - 1] = this.items[p - 1];
            this.items[p - 1] = tmp;
            i = p;
            p = i >> 1;
        }
    }
    downheap(p) {
        const z = this.items.length;
        let c = p << 1;
        while (c <= z) {
            if (c < z && this.compare(this.items[c], this.items[c - 1]) < 0) {
                c += 1;
            }
            if (this.compare(this.items[c - 1], this.items[p - 1]) < 0) {
                const tmp = this.items[c - 1];
                this.items[c - 1] = this.items[p - 1];
                this.items[p - 1] = tmp;
                p = c;
                c = p << 1;
            }
            else {
                break;
            }
        }
    }
}
exports.Heap = Heap;
