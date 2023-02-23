export function singleNonDuplicate(nums: number[]): number {
  let l = 0;
  let r = nums.length;
  let ans = -1;

  while (l <= r) {
    let mid = l + r;
    let idx = mid * 2;
    if (idx + 1 >= nums.length || nums[idx] !== nums[idx + 1]) {
      r = mid - 1;
      ans = nums[idx];
    } else {
      l = mid + 1;
    }
  }

  return ans;
}
