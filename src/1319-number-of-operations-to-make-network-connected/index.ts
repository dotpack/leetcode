export function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1;
  }

  const adj = connections.reduce<Record<number, number[]>>((acc, [f, t]) => {
    acc[f] = acc[f] || [];
    acc[f].push(t);
    acc[t] = acc[t] || [];
    acc[t].push(f);
    return acc;
  }, {});

  const visited: boolean[] = new Array(n).fill(false);

  function dfs(i: number): void {
    visited[i] = true;
    if (!adj[i]) {
      return;
    }
    for (const t of adj[i]) {
      if (!visited[t]) {
        dfs(t);
      }
    }
  }

  let islands = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      dfs(i);
      islands++;
    }
  }

  return islands - 1;
}
