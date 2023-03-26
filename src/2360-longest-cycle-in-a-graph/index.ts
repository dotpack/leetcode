export function longestCycle(edges: number[]): number {
  const visited = new Array(edges.length).fill(0);

  let max = -1;

  let stp = 1;
  for (let node = 0; node < edges.length; node++) {
    if (visited[node] > 0) {
      continue;
    }

    const start = stp;

    let curr = node;
    while (curr !== -1 && visited[curr] === 0) {
      visited[curr] = stp;
      stp++;
      curr = edges[curr];
    }
    if (curr !== -1 && visited[curr] >= start) {
      max = Math.max(max, stp - visited[curr]);
    }
  }

  return max;
}
