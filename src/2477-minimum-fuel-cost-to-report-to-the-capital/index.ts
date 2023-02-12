export function minimumFuelCost(roads: number[][], seats: number): number {
  let fuel = 0;

  const adj: Record<number, number[]> = {};
  for (const [f, t] of roads) {
    adj[f] = adj[f] || [];
    adj[f].push(t);
    adj[t] = adj[t] || [];
    adj[t].push(f);
  }

  function dfs(node: number, parent: number) {
    let representatives = 1;
    if (!adj[node]) {
      return representatives;
    }
    for (const child of adj[node]) {
      if (child !== parent) {
        representatives += dfs(child, node);
      }
    }
    if (node !== 0) {
      fuel += Math.ceil(representatives / seats);
    }
    return representatives;
  }

  dfs(0, -1);

  return fuel;
}
