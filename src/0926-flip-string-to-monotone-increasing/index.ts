export function minFlipsMonoIncr(s: string): number {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      n += 1;
    }
  }

  let result = n;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      n -= 1;
      result = Math.min(result, n);
    } else {
      n += 1;
    }
  }
  return result;
}
