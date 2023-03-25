export function countPairs(n: number, edges: number[][]): number {
  const parent = new Array(n).fill(0).map((_, i) => i);
  const size = new Array(n).fill(1);

  function find(x: number): number {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x: number, y: number): void {
    let a = find(x);
    let b = find(y);
    if (a !== b) {
      if (size[a] < size[b]) {
        [a, b] = [b, a];
      }
      parent[b] = a;
      size[a] += size[b];
      size[b] = 0;
    }
  }

  for (const [a, b] of edges) {
    union(a, b);
  }

  let ans = 0;
  for (const s of size) {
    if (s > 0) {
      n -= s;
      ans += s * n;
    }
  }
  return ans;
}
