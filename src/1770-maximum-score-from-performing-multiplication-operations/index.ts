export function maximumScore(nums: number[], multipliers: number[]): number {
  const cache: number[][] = [];

  return calc(0, 0, nums.length - 1);

  function calc(index: number, left: number, right: number) {
    if (index === multipliers.length) return 0;

    if (cache[left]?.[index] !== undefined) return cache[left][index];

    const m = multipliers[index];

    const l = nums[left] * m + calc(index + 1, left + 1, right);
    const r = nums[right] * m + calc(index + 1, left, right - 1);

    const max = Math.max(l, r);

    cache[left] = cache[left] || [];
    cache[left][index] = max;
    return max;
  }
}
