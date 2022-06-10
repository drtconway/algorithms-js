import { tarjan } from "../../src/graph/sccs-tarjan";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

import { Graph } from "../../src/graph/graph";

describe("singleton SCCs", () => {
  it("empty case", () => {
    const G: Graph<string> = new Graph<string>([], []);
    const sccs: string[][] = tarjan(G, false);
    expect(sccs).to.eql([]);
  });
  it("singletons", () => {
    const G: Graph<string> = new Graph<string>(["a", "b", "c"], []);
    const sccs: string[][] = tarjan(G);
    expect(sccs).to.eql([["a"], ["b"], ["c"]]);
  });
});

describe("small tests", () => {
  it("test 1", () => {
    const G: Graph<string> = new Graph<string>(
      ["a", "b", "c", "d"],
      [
        ["a", "b"],
        ["b", "a"],
        ["c", "d"],
        ["d", "c"],
      ]
    );
    const sccs: string[][] = tarjan(G, true);
    expect(sccs).to.eql([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
  it("test 2", () => {
    const G: Graph<number> = new Graph<number>(
      [1, 2, 3, 4],
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1],
      ]
    );
    const sccs: number[][] = tarjan(G, true);
    expect(sccs).to.eql([[1, 2, 3, 4]]);
  });
  it("test 3", () => {
    const a: [number, number] = [1, 2];
    const b: [number, number] = [3, 4];
    const G: Graph<[number, number]> = new Graph<[number, number]>(
      [a, b],
      [
        [a, b],
        [b, a],
      ]
    );
    const sccs: [number, number][][] = tarjan(G, true);
    expect(sccs).to.eql([[a, b]]);
  });
});
