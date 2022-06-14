import { randomUniform } from "../../src/graph/random-uniform";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

import { Graph } from "../../src/graph/graph";
import { Random } from "../../src/random/random";
import { Sha1Source } from "../../src/random/sha1";
import { range } from "../../src/list/range";

describe("small graphs", () => {
  it("empty", () => {
    const rng: Random = new Random(new Sha1Source(19));
    const V: number[] = [];
    const G: Graph<number> = randomUniform(rng, V, 0.25);
    expect(G.V).to.eql([]);
    expect(G.E).to.eql({});
  });
  it("small 1", () => {
    const rng: Random = new Random(new Sha1Source(19));
    const V: string[] = [...range(10)].map(String);
    const G: Graph<string> = randomUniform(rng, V, 0.25);
    expect([...G.E["9"]].length).to.eql(3);
  });
});
