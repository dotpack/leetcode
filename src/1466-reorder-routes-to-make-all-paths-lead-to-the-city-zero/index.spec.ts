import { minReorder } from ".";

describe("1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero", () => {
  it.each([
    [
      6,
      [
        [0, 1],
        [1, 3],
        [2, 3],
        [4, 0],
        [4, 5],
      ],
      3,
    ],
    [
      5,
      [
        [1, 0],
        [1, 2],
        [3, 2],
        [3, 4],
      ],
      2,
    ],
    [
      3,
      [
        [1, 0],
        [2, 0],
      ],
      0,
    ],
  ])("%d %o => %d", (n, connections, res) => {
    expect(minReorder(n, connections)).toEqual(res);
  });
});
