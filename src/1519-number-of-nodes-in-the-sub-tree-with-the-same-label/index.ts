export function countSubTrees(
  n: number,
  edges: number[][],
  labels: string
): number[] {
  const arr: Record<number, number[]> = new Array(n + 1).fill(0).map(() => []);
  for (const [x, y] of edges) {
    arr[x].push(y);
    arr[y].push(x);
  }

  const res = new Array(n).fill(0);
  const base = 97;
  const cache = new Array(26).fill(0);
  function iterate(current: number, parent: number, c: number[]): void {
    const index = labels.charCodeAt(current) - base;
    const total = c[index];
    c[labels.charCodeAt(current) - base]++;

    for (const child of arr[current]) {
      if (child === parent) continue;
      iterate(child, current, c);
    }
    res[current] = c[index] - total;
  }
  iterate(0, -1, cache);
  return res;
}
