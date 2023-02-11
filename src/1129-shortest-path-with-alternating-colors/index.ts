export function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  const adj: Record<number, [number, number][]> = {};
  for (const [f, t] of redEdges) {
    adj[f] = adj[f] || [];
    adj[f].push([t, 0]);
  }

  for (const [f, t] of blueEdges) {
    adj[f] = adj[f] || [];
    adj[f].push([t, 1]);
  }

  const answer = new Array(n).fill(-1);
  const visit = new Array(n).fill(0).map(() => [false, false]);

  const q: [number, number, number][] = [];
  q.push([0, 0, -1]);

  answer[0] = 0;
  visit[0][1] = visit[0][0] = true;

  while (q.length) {
    const element = q.shift();
    if (!element) {
      continue;
    }

    const node = element[0];
    const steps = element[1];
    const prevColor = element[2];

    if (!adj[node]) {
      continue;
    }

    for (const [neighbor, color] of adj[node]) {
      if (!visit[neighbor][color] && color !== prevColor) {
        if (answer[neighbor] === -1) {
          answer[neighbor] = 1 + steps;
        }

        visit[neighbor][color] = true;
        q.push([neighbor, steps + 1, color]);
      }
    }
  }

  return answer;
}
