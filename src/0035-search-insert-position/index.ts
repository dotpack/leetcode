export function searchInsert(nums: number[], target: number): number {
  let f = 0;
  let t = nums.length - 1;
  while (f <= t) {
    const m = Math.floor((t + f) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      t = m - 1;
    } else {
      f = m + 1;
    }
  }
  return f;
}
