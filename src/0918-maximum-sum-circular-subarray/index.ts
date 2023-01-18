export function maxSubarraySumCircular(nums: number[]): number {
  let max = -Infinity;
  let maxSum = -Infinity;
  let min = +Infinity;
  let minSum = +Infinity;
  let sum = 0;

  for (const n of nums) {
    max = Math.max(max, 0) + n;
    maxSum = Math.max(maxSum, max);
    min = Math.min(min, 0) + n;
    minSum = Math.min(minSum, min);
    sum += n;
  }

  return sum === minSum ? maxSum : Math.max(maxSum, sum - minSum);
}
