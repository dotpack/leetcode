import { maxSatisfaction } from ".";

describe("1402-reducing-dishes", () => {
  it.each([
    [[-1, -8, 0, 5, -9], 14],
    [[4, 3, 2], 20],
    [[-1, -4, -5], 0],
  ])("%o => %d", (arr, res) => {
    expect(maxSatisfaction(arr)).toEqual(res);
  });
});
