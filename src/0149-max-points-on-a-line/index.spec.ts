import { maxPoints } from ".";

describe("0149-max-points-on-a-line", () => {
  it.each([
    [[[1, 1]], 1],
    [new Array(300).fill([1, 1]), 300],
    [
      [
        [1, 1],
        [1, 2],
      ],
      2,
    ],
    [
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      3,
    ],
    [
      [
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ],
      4,
    ],
  ])("%o", (arr, result) => {
    expect(maxPoints(arr)).toEqual(result);
  });
});
