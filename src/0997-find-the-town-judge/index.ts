export function findJudge(n: number, trust: number[][]): number {
  if (!trust.length && n === 1) {
    return 1;
  }
  const vals: number[] = [];
  for (const [f, t] of trust) {
    vals[f] = vals[f] || 0;
    vals[f] -= 1;
    vals[t] = vals[t] || 0;
    vals[t] += 1;
  }

  const total = n - 1;
  for (let i = 0; i < vals.length; i++) {
    if (vals[i] === total) {
      return i;
    }
  }
  return -1;
}
