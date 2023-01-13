export function longestPath(parent: number[], s: string): number {
  const adj = parent.reduce<Record<number, number[]>>((acc, parent, index) => {
    acc[parent] = acc[parent] || [];
    acc[parent].push(index);
    return acc;
  }, {});

  let resultMax = 0;

  function max(current: number): number {
    if (!adj[current]) {
      resultMax = Math.max(1, resultMax);
      return 1;
    }

    let max1 = 0;
    let max2 = 0;
    for (const child of adj[current]) {
      const childMax = max(child);
      if (s[child] === s[current]) {
        continue;
      }
      if (childMax >= max1) {
        max2 = max1;
        max1 = childMax;
      } else if (childMax > max2) {
        max2 = childMax;
      }
    }

    const totalMax = 1 + max1 + max2;
    resultMax = Math.max(resultMax, totalMax);
    return max1 + 1;
  }

  max(0);

  return resultMax;
}
