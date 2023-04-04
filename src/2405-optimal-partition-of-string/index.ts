export function partitionString(s: string): number {
  let res = 0;
  let map: Record<string, boolean> = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map[c]) {
      res++;
      map = { [c]: true };
    } else {
      map[c] = true;
    }
  }
  return res + 1;
}
