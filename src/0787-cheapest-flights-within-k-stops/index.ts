export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  let dist = new Array(n).fill(+Infinity);
  dist[src] = 0;

  for (let i = 0; i <= k; i++) {
    const temp = dist.slice();
    for (const [f, t, cost] of flights) {
      if (Number.isFinite(dist[f])) {
        temp[t] = Math.min(temp[t], dist[f] + cost);
      }
    }
    dist = temp;
  }

  return Number.isFinite(dist[dst]) ? dist[dst] : -1;
}
