export function countSubarrays(
  nums: number[],
  minK: number,
  maxK: number
): number {
  let minI = -1;
  let maxI = -1;
  let start = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      start = i + 1;
      minI = i;
      maxI = i;
      continue;
    }
    if (nums[i] == minK) {
      minI = i;
    }
    if (nums[i] == maxK) {
      maxI = i;
    }
    count += i - start + 1 - (i - (Math.min(minI, maxI) + 1) + 1);
  }
  return count;
}
