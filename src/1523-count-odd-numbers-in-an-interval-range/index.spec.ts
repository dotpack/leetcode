import { countOdds } from ".";

describe("1523-count-odd-numbers-in-an-interval-range", () => {
  it.each([
    [3, 7, 3],
    [8, 10, 1],
    [9, 9, 1],
    [9, 10, 1],
    [9, 11, 2],
    [10, 10, 0],
    [10, 11, 1],
    [10, 12, 1],
  ])("from %d to %d => %d", (low, high, result) => {
    expect(countOdds(low, high)).toEqual(result);
  });
});
