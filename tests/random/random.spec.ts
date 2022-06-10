import { Random } from "../../src/random/random";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

import { BuiltinSource } from "../../src/random/builtin";

describe("Random.random()", () => {
  it("check range", () => {
    const R = new Random(new BuiltinSource());
    for (let i = 0; i < 100; ++i) {
      const x = R.random();
      expect(0 <= x && x < 1).to.be.true;
    }
  });
});

describe("Random.randint()", () => {
  it("check range 1", () => {
    const R = new Random(new BuiltinSource());
    for (let i = 0; i < 100; ++i) {
      const x = R.randint(0, 10);
      expect(Number.isInteger(x)).to.be.true;
      expect(0 <= x && x < 10).to.be.true;
    }
  });
});

describe("Random.shuffle()", () => {
    it("shuffle (1)", () => {
        const R = new Random(new BuiltinSource());
        const xs: number[] = [];
        for (let i = 0; i < 100; ++i) {
            xs.push(i);
        }
        R.shuffle(xs);
        let gt = 0;
        let lt = 0;
        for (let i = 1; i < 100; ++i) {
            if (xs[i-1] < xs[i]) {
                lt += 1;
            } else {
                gt += 1;
            }
        }
        expect(40 <= lt && lt <= 60).to.be.true;
        expect(40 <= gt && gt <= 60).to.be.true;
    });
});