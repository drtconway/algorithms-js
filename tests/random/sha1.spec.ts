import { Sha1Source } from "../../src/random/sha1";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("sh1 hashes for random numbers", () => {
  it("seed 1", () => {
    const seed = "hello";
    const R = new Sha1Source(seed);
    const cts: number[] = [];
    for (let i = 0; i < 256; ++i) {
      cts.push(0);
    }
    const N = 100;
    for (let i = 0; i < N * 256; ++i) {
      const x = R.byte();
      expect(x).to.be.greaterThanOrEqual(0);
      expect(x).to.be.lessThanOrEqual(255);
      cts[x] += 1;
    }
    const L = 0.5 * N;
    const H = 1.5 * N;
    for (let i = 0; i < 256; ++i) {
        expect(L < cts[i] && cts[i] < H).to.be.true;
    }
  });

  it("seed 2", () => {
    const seed = "world";
    const R = new Sha1Source(seed);
    const cts: number[] = [];
    for (let i = 0; i < 256; ++i) {
      cts.push(0);
    }
    const N = 100;
    for (let i = 0; i < N * 256; ++i) {
      const x = R.byte();
      expect(x).to.be.greaterThanOrEqual(0);
      expect(x).to.be.lessThanOrEqual(255);
      cts[x] += 1;
    }
    const L = 0.5 * N;
    const H = 1.5 * N;
    for (let i = 0; i < 256; ++i) {
        expect(L < cts[i] && cts[i] < H).to.be.true;
    }
  });

});
