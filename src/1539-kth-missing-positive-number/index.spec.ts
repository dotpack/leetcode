import { findKthPositive } from ".";

describe("1539-kth-missing-positive-number", () => {
  it.each([
    [[2, 3, 4, 7, 11], 5, 9],
    [[1, 2, 3, 4], 2, 6],
  ])("%o and %d => %d", (arr, k, res) => {
    expect(findKthPositive(arr, k)).toEqual(res);
  });
});
