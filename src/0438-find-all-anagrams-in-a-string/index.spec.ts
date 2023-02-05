import { findAnagrams } from ".";

describe("0438-find-all-anagrams-in-a-string", () => {
  it.each([
    ["cbaebabacd", "abc", [0, 6]],
    ["abab", "ab", [0, 1, 2]],
    ["cbacebabacd", "abc", [0, 1, 7]],
  ])("%s and %s => %o", (s, p, result) => {
    const x = findAnagrams(s, p);
    console.log(x);
    expect(x).toEqual(result);
  });
});
