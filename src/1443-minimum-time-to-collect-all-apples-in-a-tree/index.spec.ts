import { minTime } from ".";

describe("1443-minimum-time-to-collect-all-apples-in-a-tree", () => {
  it.each([
    [
      [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      [false, false, true, false, true, true, false],
      8,
    ],
    [
      [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      [false, false, true, false, false, true, false],
      6,
    ],
    [
      [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      [false, false, false, false, false, false, false],
      0,
    ],
  ])("find correct path length", (edges, hasApple, result) => {
    expect(minTime(edges.length, edges, hasApple)).toEqual(result);
  });
});
