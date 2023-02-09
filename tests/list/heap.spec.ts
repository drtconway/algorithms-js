import { Heap } from "../../src/list/heap";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("heap on strings", () => {
  it("empty heap", () => {
    const H = new Heap<string>([]);
    expect(H.size()).to.eql(0);
  });
  it("singleton heaps", () => {
    const H1 = new Heap<string>(["x"]);
    expect(H1.size()).to.eql(1);
    expect(H1.front()).to.eql("x");
    const x = H1.pop();
    expect(H1.size()).to.eql(0);
    expect(x).to.eql("x");
    const H2 = new Heap<string>([]);
    expect(H2.size()).to.eql(0);
    H2.push("y");
    expect(H2.size()).to.eql(1);
    expect(H2.front()).to.eql("y");
    const y = H2.pop();
    expect(H2.size()).to.eql(0);
    expect(y).to.eql("y");
  });
  it("small heaps", () => {
    const X: string[] = [
      "medievalist",
      "unreaving",
      "unchallengeably",
      "mugiloid",
      "mugiloid",
      "chondroid",
      "ungenerical",
      "goosegirl",
      "wimberry",
      "anagrammatic",
      "predistribution",
    ];
    const Y: string[] = [...X];
    const H = new Heap<string>(X);
    X.sort();
    expect(H.size()).to.eql(X.length);
    for (const x of X) {
      expect(H.size()).to.be.greaterThan(0);
      expect(H.front()).to.eql(x);
      const y = H.pop();
      expect(y).to.eql(x);
    }
    for (const y of Y) {
        H.push(y);
    }
    expect(H.size()).to.eql(X.length);
    for (const x of X) {
      expect(H.size()).to.be.greaterThan(0);
      expect(H.front()).to.eql(x);
      const y = H.pop();
      expect(y).to.eql(x);
    }
  });
});
