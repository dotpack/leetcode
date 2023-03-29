export function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);

  let max = 0;
  let sum = 0;
  let partialSum = 0;
  for (let i = 0; i < satisfaction.length; i++) {
    partialSum += satisfaction[i];
    sum += partialSum;
    max = Math.max(sum, max);
  }
  return max;
}
