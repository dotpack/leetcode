export function minScore(n: number, roads: number[][]): number {
  const adj = roads.reduce<Record<number, [number, number][]>>(
    (acc, [f, t, d]) => {
      acc[f] = acc[f] || [];
      acc[f].push([t, d]);
      acc[t] = acc[t] || [];
      acc[t].push([f, d]);
      return acc;
    },
    {}
  );

  let min = +Infinity;
  const visited = new Set<number>();
  const q: number[] = [1];

  while (q.length) {
    const f = q.shift();
    if (!f || !adj[f]) {
      continue;
    }
    for (const [t, d] of adj[f]) {
      if (!visited.has(t)) {
        q.push(t);
        visited.add(t);
      }
      min = Math.min(min, d);
    }
  }

  return min;
}
