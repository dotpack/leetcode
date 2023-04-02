import { successfulPairs } from ".";

describe("2300-successful-pairs-of-spells-and-potions", () => {
  it.each([
    [[5, 1, 3], [1, 2, 3, 4, 5], 7, [4, 0, 3]],
    [[3, 1, 2], [8, 5, 8], 16, [2, 0, 2]],
  ])("%o %o %d => %o", (spells, potions, success, res) => {
    expect(successfulPairs(spells, potions, success)).toEqual(res);
  });
});
