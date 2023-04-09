export function largestPathValue(colors: string, edges: number[][]): number {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const s = z - a + 1;

  const len = colors.length;
  const inDegree = new Array(len).fill(0);
  const colorsDP = new Array(len).fill(0).map(() => new Array(s).fill(0));

  const adj = edges.reduce<Record<number, number[]>>((acc, [f, t]) => {
    acc[f] = acc[f] || [];
    acc[f].push(t);
    inDegree[t]++;
    return acc;
  }, {});

  const q: number[] = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      q.push(i);
    }
  }

  let visited = 0;
  while (q.length) {
    const parent = q.shift()!;
    const parentColor = colors.charCodeAt(parent) - a;
    colorsDP[parent][parentColor] = colorsDP[parent][parentColor] + 1;

    const neighbours = adj[parent] || [];
    for (const child of neighbours) {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        q.push(child);
      }

      for (let i = 0; i < s; i++) {
        colorsDP[child][i] = Math.max(colorsDP[child][i], colorsDP[parent][i]);
      }
    }

    visited++;
  }

  if (visited !== len) {
    return -1;
  }

  let maxColor = 0;
  for (let i = 0; i < colorsDP.length; i++) {
    for (let j = 0; j < 26; j++) {
      maxColor = Math.max(maxColor, colorsDP[i][j]);
    }
  }

  return maxColor;
}
