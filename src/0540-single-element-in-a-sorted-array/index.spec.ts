import { singleNonDuplicate } from ".";

describe("0540-single-element-in-a-sorted-array", () => {
  it.each([
    [[1, 1, 2, 3, 3, 4, 4, 8, 8], 2],
    [[3, 3, 7, 7, 10, 11, 11], 10],
    [[1], 1],
    [[1, 1, 2], 2],
    [[1, 2, 2], 1],
  ])("%o => %d", (nums, res) => {
    expect(singleNonDuplicate(nums)).toEqual(res);
  });
});
