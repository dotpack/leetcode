export function minReorder(n: number, connections: number[][]): number {
  const from: Record<number, number[]> = {};
  const to: Record<number, number[]> = {};
  for (const [f, t] of connections) {
    from[f] = from[f] || [];
    from[f].push(t);

    to[t] = to[t] || [];
    to[t].push(f);
  }

  const q = [0];
  const visited = new Set();

  let result = 0;

  while (q.length) {
    const curr = q.shift();
    if (curr === undefined) {
      continue;
    }

    const fArr = from[curr];
    if (fArr) {
      for (const t of fArr) {
        if (visited.has(t)) {
          continue;
        }
        q.push(t);
        result++;
      }
    }

    const tArr = to[curr];
    if (tArr) {
      for (const f of tArr) {
        if (visited.has(f)) {
          continue;
        }
        q.push(f);
      }
    }

    visited.add(curr);
  }

  return result;
}
