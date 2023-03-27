import { minPathSum } from ".";

describe("0064-minimum-path-sum", () => {
  it.each([
    [
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
      7,
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      12,
    ],
  ])("%o => %d", (grid, res) => {
    expect(minPathSum(grid)).toEqual(res);
  });
});
