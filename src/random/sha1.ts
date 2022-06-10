import { RandomSource } from "./random";

import { createHash } from "crypto";

export class Sha1Source implements RandomSource {
  private hex: string;
  private bytes: number[];

  constructor(seed: any) {
    this.hex = seed.toString();
    this.bytes = [];
  }

  byte(): number {
    if (this.bytes.length == 0) {
      this.refill();
    }
    return this.bytes.pop();
  }

  private refill(): void {
    const hash = createHash("sha1");
    hash.update(this.hex);
    this.hex = hash.digest("hex");
    for (let i = 0; i < this.hex.length; i += 2) {
      this.bytes.push(Number("0x" + this.hex.slice(i, i + 2)));
    }
  }
}
