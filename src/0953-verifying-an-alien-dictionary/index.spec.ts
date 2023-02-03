import { isAlienSorted } from ".";

describe("0953-verifying-an-alien-dictionary", () => {
  it.each([
    [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz", true],
    [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz", false],
    [["apple", "app"], "abcdefghijklmnopqrstuvwxyz", false],
  ])("%o and %s = %o", (words, order, result) => {
    expect(isAlienSorted(words, order)).toEqual(result);
  });
});
