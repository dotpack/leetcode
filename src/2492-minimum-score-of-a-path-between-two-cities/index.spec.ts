import { minScore } from ".";

describe("2492-minimum-score-of-a-path-between-two-cities", () => {
  it.each([
    [
      4,
      [
        [1, 2, 9],
        [2, 3, 6],
        [2, 4, 5],
        [1, 4, 7],
      ],
      5,
    ],
    [
      4,
      [
        [1, 2, 2],
        [1, 3, 4],
        [3, 4, 7],
      ],
      2,
    ],
  ])("%d and %o => %d", (n, arr, res) => {
    expect(minScore(n, arr)).toEqual(res);
  });
});
