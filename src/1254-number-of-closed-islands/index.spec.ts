import { closedIsland } from ".";

describe("1254-number-of-closed-islands", () => {
  it.each([
    [
      [
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
      ],
      2,
    ],
    [
      [
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
      ],
      1,
    ],
  ])("%o => %d", (grid, res) => {
    expect(closedIsland(grid)).toEqual(res);
  });
});
