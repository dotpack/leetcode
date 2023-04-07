import { numEnclaves } from ".";

describe("1020-number-of-enclaves", () => {
  it.each([
    [
      [
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      3,
    ],
    [
      [
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
      0,
    ],
    [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      4,
    ],
  ])("%o => %d", (grid, res) => {
    expect(numEnclaves(grid)).toEqual(res);
  });
});
