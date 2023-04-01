export function search(nums: number[], target: number): number {
  let f = 0;
  let t = nums.length - 1;

  while (f < t) {
    const mid = f + Math.floor((t - f) / 2);
    const val = nums[mid];
    if (val === target) {
      return mid;
    } else if (val < target) {
      f = mid + 1;
    } else {
      t = mid - 1;
    }
  }

  return nums[f] === target ? f : -1;
}
