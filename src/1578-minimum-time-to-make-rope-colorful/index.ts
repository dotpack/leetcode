export function minCost(colors: string, neededTime: number[]): number {
  let count = 0;

  let i = 0;
  while (i < colors.length) {
    let total = 0;
    let max = -Infinity;

    const curr = colors[i];
    while (colors[i] === curr) {
      total += neededTime[i];
      max = Math.max(max, neededTime[i]);
      i++;
    }

    count += total - max;
  }

  return count;
}
