export interface RandomSource {
  byte: () => number;
}

export class Random {
  source: RandomSource;

  constructor(source: RandomSource) {
    this.source = source;
  }

  random(): number {
    let x = 0.0;
    for (let i = 0; i < 6; ++i) {
      let b = this.source.byte();
      for (let j = 0; j < 8; ++j) {
        x += b & 1;
        x /= 2;
        b >>= 1;
      }
    }
    return x;
  }

  randint(begin: number, end: number): number {
    const r = end - begin;
    return Math.floor(r * this.random());
  }

  shuffle<T>(xs: T[]): T[] {
    const n = xs.length;
    for (let i = 0; i < n; ++i) {
      const j = Math.floor(n * this.random());
      if (i != j) {
        const x = xs[i];
        xs[i] = xs[j];
        xs[j] = x;
      }
    }
    return xs;
  }
}
