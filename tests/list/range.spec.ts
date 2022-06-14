import { range } from "../../src/list/range";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

describe("one argument", () => {
  it("zero", () => {
    expect([...range(0)]).to.eql([]);
  });
  it("one", () => {
    expect([...range(1)]).to.eql([0]);
  });
  it("five", () => {
    expect([...range(5)]).to.eql([0, 1, 2, 3, 4]);
  });
});

describe("two arguments", () => {
  it("one-one", () => {
    expect([...range(1, 1)]).to.eql([]);
  });
  it("one-two", () => {
    expect([...range(1, 2)]).to.eql([1]);
  });
  it("two-five", () => {
    expect([...range(2, 5)]).to.eql([2, 3, 4]);
  });
});

describe("three arguments", () => {
  it("one-one-two", () => {
    expect([...range(1, 1, 2)]).to.eql([]);
  });
  it("one-two-two", () => {
    expect([...range(1, 2, 2)]).to.eql([1]);
  });
  it("five-two-minus-one", () => {
    expect([...range(5, 2, -1)]).to.eql([5, 4, 3]);
  });
});
