export function jump(nums: number[]): number {
  const n = nums.length;
  let res = 0;
  let curEnd = 0;
  let curFar = 0;

  for (let i = 0; i < n - 1; i++) {
    curFar = Math.max(curFar, i + nums[i]);
    if (i === curEnd) {
      res++;
      curEnd = curFar;
    }
  }

  return res;
}
