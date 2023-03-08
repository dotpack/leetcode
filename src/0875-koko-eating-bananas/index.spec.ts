import { minEatingSpeed } from ".";

describe("0875-koko-eating-bananas", () => {
  it.each([
    [[3, 6, 7, 11], 8, 4],
    [[30, 11, 23, 4, 20], 5, 30],
    [[30, 11, 23, 4, 20], 6, 23],
  ])("%o %d => %d", (piles, h, res) => {
    expect(minEatingSpeed(piles, h)).toEqual(res);
  });
});
