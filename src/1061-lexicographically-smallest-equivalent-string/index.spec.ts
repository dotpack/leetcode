import { smallestEquivalentString } from ".";

describe("1061-lexicographically-smallest-equivalent-string", () => {
  it.each([
    ["parker", "morris", "parser", "makkek"],
    ["hello", "world", "hold", "hdld"],
    ["leetcode", "programs", "sourcecode", "aauaaaaada"],
  ])("%s + %s + %s -> %s", (s1, s2, baseStr, r) => {
    expect(smallestEquivalentString(s1, s2, baseStr)).toEqual(r);
  });
});
