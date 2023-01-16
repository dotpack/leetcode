import { insert } from ".";

describe("0057-insert-interval", () => {
  it.each([
    [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
      [
        [1, 5],
        [6, 9],
      ],
    ],
    [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
      [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    ],
  ])("%o + %o = %o", (intervals, newInterval, result) => {
    const ans = insert(intervals, newInterval);
    console.log(ans);
    expect(ans).toEqual(result);
  });
});
