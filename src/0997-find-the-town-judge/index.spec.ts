import { findJudge } from ".";

describe("0997-find-the-town-judge", () => {
  it.each([
    [2, [[1, 2]], 2],
    [
      3,
      [
        [1, 3],
        [2, 3],
      ],
      3,
    ],
    [
      3,
      [
        [1, 3],
        [2, 3],
        [3, 1],
      ],
      -1,
    ],
    [
      2,
      [
        [1, 2],
        [2, 1],
      ],
      -1,
    ],
    [1, [], 1],
    [2, [], -1],
  ])("%d %o => %d", (n, arr, res) => {
    expect(findJudge(n, arr)).toEqual(res);
  });
});
