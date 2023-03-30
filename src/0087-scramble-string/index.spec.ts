import { isScramble } from ".";

describe("0087-scramble-string", () => {
  it.each([
    ["great", "rgeat", true],
    ["abcde", "caebd", false],
    ["a", "a", true],
  ])("%s %s => %o", (s1, s2, res) => {
    expect(isScramble(s1, s2)).toEqual(res);
  });
});
