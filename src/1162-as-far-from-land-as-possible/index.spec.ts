import { maxDistance } from ".";

describe("1162-as-far-from-land-as-possible", () => {
  it.each([
    [
      2,
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
    ],
    [
      4,
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
  ])("returns %d", (res, arr) => {
    expect(maxDistance(arr)).toEqual(res);
  });
});
