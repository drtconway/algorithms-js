export function NumberKey(x: number): string | number {
  return x;
}

export function StringKey(x: string): string | number {
  return x;
}

export class UnionFind<T> {
  private makeKey: (x: T) => string | number;
  private parent: { [key: string | number]: T };
  private rank: { [key: string | number]: number };

  constructor(makeKey: (x: T) => string | number) {
    this.makeKey = makeKey;
    this.parent = {};
    this.rank = {};
  }

  find(x: T): T {
    const s = this.makeKey(x);
    if (!(s in this.parent)) {
      this.parent[s] = x;
      this.rank[s] = 0;
      return x;
    }
    let xp = this.parent[s];
    if (x !== xp) {
      this.parent[s] = this.find(xp);
    }
    return this.parent[s];
  }

  union(x: T, y: T): T {
    let xr = this.find(x);
    let yr = this.find(y);

    if (xr === yr) {
      return xr;
    }

    const xrs = this.makeKey(xr);
    const yrs = this.makeKey(yr);

    let res = null;
    if (this.rank[xrs] < this.rank[yrs]) {
      this.parent[xrs] = yr;
      res = yr;
    } else if (this.rank[xrs] > this.rank[yrs]) {
      this.parent[yrs] = xr;
      res = xr;
    } else {
      this.parent[yrs] = xr;
      this.rank[xrs] += 1;
      res = xr;
    }
    return res;
  }
}
