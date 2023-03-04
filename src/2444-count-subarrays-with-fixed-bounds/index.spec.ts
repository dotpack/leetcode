import { countSubarrays } from ".";

describe("2444-count-subarrays-with-fixed-bounds", () => {
  it.each([
    [[1, 3, 5, 2, 7, 5], 1, 5, 2],
    [[1, 1, 1, 1], 1, 1, 10],
  ])("%o, min=%d, max=%d => %d", (arr, min, max, res) => {
    expect(countSubarrays(arr, min, max)).toEqual(res);
  });
});
