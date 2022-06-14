import { Graph } from "./graph";
import { Random } from "../random/random";

export function randomUniform<T>(rng: Random, V: T[], p: number): Graph<T> {
  const E: [T, T][] = [];
  for (let i = 0; i < V.length; ++i) {
    for (let j = 0; j < V.length; ++j) {
      if (i == j) {
        continue;
      }
      const u = rng.random();
      if (u < p) {
        E.push([V[i], V[j]]);
      }
    }
  }
  return new Graph<T>(V, E);
}
