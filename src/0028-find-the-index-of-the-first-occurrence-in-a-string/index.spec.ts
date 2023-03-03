import { strStr } from ".";

describe("0028-find-the-index-of-the-first-occurrence-in-a-string", () => {
  it.each([
    ["sadbutsad", "sad", 0],
    ["leetcode", "leeto", -1],
    ["a", "a", 0],
  ])("%s ~ %s = %d", (s1, s2, n) => {
    expect(strStr(s1, s2)).toEqual(n);
  });
});
