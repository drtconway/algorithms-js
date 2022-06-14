export function* range(fst: number, snd?: number, trd?: number): Generator<number> {
  let begin: number;
  let end: number;
  let step: number = 1;
  if (snd === undefined) {
    begin = 0;
    end = fst;
  } else {
    begin = fst;
    end = snd;
  }
  if (trd !== undefined) {
    step = trd;
  }
  if (step >= 0) {
    for (let i = begin; i < end; i += step) {
        yield i;
      }
  } else {
    for (let i = begin; i > end; i += step) {
        yield i;
      }
  }
}
