export function minTime(
  n: number,
  edges: number[][],
  hasApple: boolean[]
): number {
  const childrens = edges.reduce<Record<number, number[]>>(
    (acc, [from, to]) => {
      acc[from] = acc[from] || [];
      acc[from].push(to);
      acc[to] = acc[to] || [];
      acc[to].push(from);
      return acc;
    },
    {}
  );

  function calc(num: number, parent: number): number {
    let totalTime = 0;
    for (const child of childrens[num]) {
      if (child === parent) {
        continue;
      }
      const childTime = calc(child, num);
      if (childTime || hasApple[child]) {
        totalTime += childTime + 2;
      }
    }
    return totalTime;
  }

  return calc(0, -1);
}
