"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
function* range(fst, snd, trd) {
    let begin;
    let end;
    let step = 1;
    if (snd === undefined) {
        begin = 0;
        end = fst;
    }
    else {
        begin = fst;
        end = snd;
    }
    if (trd !== undefined) {
        step = trd;
    }
    if (step >= 0) {
        for (let i = begin; i < end; i += step) {
            yield i;
        }
    }
    else {
        for (let i = begin; i > end; i += step) {
            yield i;
        }
    }
}
exports.range = range;
