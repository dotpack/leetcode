export function zeroFilledSubarray(nums: number[]): number {
  let count = 0;

  let seq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      seq++;
      count += seq;
    } else {
      seq = 0;
    }
  }

  return count;
}
