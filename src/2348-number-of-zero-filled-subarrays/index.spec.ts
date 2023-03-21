import { zeroFilledSubarray } from ".";

describe("2348-number-of-zero-filled-subarrays", () => {
  it.each([
    [[1, 3, 0, 0, 2, 0, 0, 4], 6],
    [[0, 0, 0, 2, 0, 0], 9],
    [[2, 10, 2019], 0],
  ])("%o => %d", (arr, res) => {
    expect(zeroFilledSubarray(arr)).toEqual(res);
  });
});
