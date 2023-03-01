import { sortArray } from ".";

describe("0912-sort-an-array", () => {
  it.each([
    [
      [5, 2, 3, 1],
      [1, 2, 3, 5],
    ],
    [
      [5, 1, 1, 2, 0, 0],
      [0, 0, 1, 1, 2, 5],
    ],
  ])("%o => %o", (arr, res) => {
    expect(sortArray(arr)).toEqual(res);
  });
});
