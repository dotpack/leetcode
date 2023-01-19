import { subarraysDivByK } from ".";

describe("0974-subarray-sums-divisible-by-k", () => {
  it.each([
    [[4, 5, 0, -2, -3, 1], 5, 7],
    [[5], 9, 0],
  ])("%o + %d => %d", (nums, k, result) => {
    expect(subarraysDivByK(nums, k)).toEqual(result);
  });
});
