import { minimizeArrayValue } from ".";

describe("2439-minimize-maximum-of-array", () => {
  it.each([
    [[3, 7, 1, 6], 5],
    [[10, 1], 10],
  ])("%o => %d", (nums, res) => {
    expect(minimizeArrayValue(nums)).toEqual(res);
  });
});
