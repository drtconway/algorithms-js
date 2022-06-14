export function union<T>(...ss: Set<T>[]): Set<T> {
  const res: Set<T> = new Set<T>();
  for (const s of ss) {
    for (const x of s) {
      res.add(x);
    }
  }
  return res;
}

export function intersection<T>(...ss: Set<T>[]): Set<T> {
  let res: Set<T> = new Set<T>();
  if (ss.length == 0) {
    return res;
  }
  for (const x of ss[0]) {
    res.add(x);
  }
  for (let i = 1; i < ss.length && res.size > 0; ++i) {
    const tmp: Set<T> = new Set<T>();
    for (const x of res) {
      if (ss[i].has(x)) {
        tmp.add(x);
      }
    }
    res = tmp;
  }
  return res;
}

export function difference<T>(xs: Set<T>, ys: Set<T>): Set<T> {
  const res: Set<T> = new Set<T>();
  for (const x of xs) {
    if (!ys.has(x)) {
      res.add(x);
    }
  }
  return res;
}
