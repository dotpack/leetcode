import { search } from ".";

describe("0704-binary-search", () => {
  it.each([
    [[-1, 0, 3, 5, 9, 12], 9, 4],
    [[-1, 0, 3, 5, 9, 12], 2, -1],
  ])("%o and %d => %d", (nums, target, res) => {
    expect(search(nums, target)).toEqual(res);
  });
});
