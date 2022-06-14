export class Deque<T> {
  private frontQ: T[] = [];
  private backQ: T[] = [];

  size(): number {
    return this.frontQ.length + this.backQ.length;
  }

  push_front(x: T): void {
    this.frontQ.push(x);
  }

  push_back(x: T): void {
    this.backQ.push(x);
  }

  pop_front(): T {
    if (this.frontQ.length == 0) {
      while (this.backQ.length > 0) {
        const x = this.backQ.pop();
        this.frontQ.push(x);
      }
    }
    return this.frontQ.pop();
  }

  pop_back(): T {
    if (this.backQ.length == 0) {
      while (this.frontQ.length > 0) {
        const x = this.frontQ.pop();
        this.backQ.push(x);
      }
    }
    return this.backQ.pop();
  }

  [Symbol.iterator](): Iterator<T> {
    const dup = [...[...this.frontQ].reverse(), ...this.backQ];
    let idx = -1;
    return {
      next: () => ({ value: dup[++idx], done: !(idx in dup) }),
    };
  }
}
