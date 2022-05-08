export const diff = <T>(a: T, b: T): boolean =>
  JSON.stringify(a) !== JSON.stringify(b);
