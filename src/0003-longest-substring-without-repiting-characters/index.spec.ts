import { lengthOfLongestSubstring } from "./index";

describe("0003-longest-substring-without-repiting-characters", () => {
  test.only.each([
    ["abcabcbb", 3],
    ["bbbbb", 1],
    ["pwwkew", 3],
    ["", 0],
    ["abba", 2],
  ])("%s => %i", (str, expected) => {
    expect(lengthOfLongestSubstring(str)).toEqual(expected);
  });
});
