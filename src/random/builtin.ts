import { RandomSource } from "./random";

export class BuiltinSource implements RandomSource {
  byte(): number {
    return Math.floor(256 * Math.random());
  }
}
