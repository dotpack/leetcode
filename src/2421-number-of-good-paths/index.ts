class UnionFind {
  private readonly parent: number[] = [];
  private readonly rank: number[] = [];

  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  unionSet(x: number, y: number): void {
    const xSet = this.find(x);
    const ySet = this.find(y);
    if (xSet === ySet) {
      return;
    } else if (this.rank[xSet] < this.rank[ySet]) {
      this.parent[xSet] = ySet;
    } else if (this.rank[xSet] > this.rank[ySet]) {
      this.parent[ySet] = xSet;
    } else {
      this.parent[ySet] = xSet;
      this.rank[xSet] += 1;
    }
  }
}

export function numberOfGoodPaths(vals: number[], edges: number[][]): number {
  const adj = edges.reduce<Record<number, number[]>>((acc, [f, t]) => {
    acc[f] = acc[f] || [];
    acc[f].push(t);
    acc[t] = acc[t] || [];
    acc[t].push(f);
    return acc;
  }, {});

  const nodesByVal = vals.reduce((acc, val, i) => {
    const arr = acc.get(val) || [];
    arr.push(i);
    acc.set(val, arr);
    return acc;
  }, new Map<number, number[]>());

  const dsu = new UnionFind(vals.length);

  const values = [...nodesByVal.keys()];
  values.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));

  let count = 0;
  for (const val of values) {
    const nodes = nodesByVal.get(val) || [];
    for (const node of nodes) {
      if (!adj[node]) {
        continue;
      }
      for (const neighbor of adj[node]) {
        if (vals[node] >= vals[neighbor]) {
          dsu.unionSet(node, neighbor);
        }
      }
    }

    const group = new Map<number, number>();
    for (const node of nodes) {
      const g = dsu.find(node);
      group.set(g, (group.get(g) || 0) + 1);
    }

    for (const size of group.values()) {
      count += (size * (size + 1)) / 2;
    }
  }

  return count;
}
