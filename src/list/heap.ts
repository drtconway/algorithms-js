export type Comparator<T> = (lhs: T, rhs: T) => number;

export function defaultCompare(lhs: any, rhs: any): number {
  if (lhs < rhs) {
    return -1;
  }
  if (lhs > rhs) {
    return 1;
  }
  return 0;
}

export function numericCompare(lhs: number, rhs: number): number {
    return lhs - rhs;
}

export function reverseNumericCompare(lhs: number, rhs: number): number {
    return rhs - lhs;
}

export class Heap<T> {
  items: T[];
  compare: Comparator<T>;

  constructor(items: readonly T[], comparator: Comparator<T> = defaultCompare) {
    this.items = [...items];
    this.compare = comparator;
    this.heapify();
  }

  size(): number {
    return this.items.length;
  }

  private heapify() {
    const z = this.items.length;
    for (let i = 1; i <= z; ++i) {
      this.upheap(i);
    }
  }

  front(): T {
    return this.items[0];
  }

  push(item: T) {
    this.items.push(item);
    this.upheap(this.items.length);
  }

  pop(): T {
    const res = this.items[0];
    const last = this.items.pop();
    if (this.items.length > 0) {
      this.items[0] = last;
      this.downheap(1);
    }
    return res;
  }

  private upheap(i: number) {
    let p = i >> 1;
    while (p >= 1 && this.compare(this.items[i - 1], this.items[p - 1]) < 0) {
      const tmp = this.items[i - 1];
      this.items[i - 1] = this.items[p - 1];
      this.items[p - 1] = tmp;
      i = p;
      p = i >> 1;
    }
  }

  private downheap(p: number) {
    const z = this.items.length;
    let c = p << 1;
    while (c <= z) {
      if (c < z && this.compare(this.items[c], this.items[c - 1]) < 0) {
        c += 1;
      }
      if (this.compare(this.items[c - 1], this.items[p - 1]) < 0) {
        const tmp = this.items[c - 1];
        this.items[c - 1] = this.items[p - 1];
        this.items[p - 1] = tmp;
        p = c;
        c = p << 1;
      } else {
        break;
      }
    }
  }
}
