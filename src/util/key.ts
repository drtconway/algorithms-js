export type Key = string | number | symbol;

export function makeKey(x: any): Key {
  switch (typeof x) {
    case "number":
    case "string":
    case "symbol": {
      return x;
    }
    default: {
      return x.toString();
    }
  }
}