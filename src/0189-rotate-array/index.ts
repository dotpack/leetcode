export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  function reverse(nums: number[], f: number, t: number) {
    while (f < t) {
      const temp = nums[f];
      nums[f] = nums[t];
      nums[t] = temp;
      f += 1;
      t -= 1;
    }
  }

  reverse(nums, 0, n - 1 - k);
  reverse(nums, n - k, n - 1);
  reverse(nums, 0, n - 1);
}
