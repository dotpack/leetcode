import { partition } from ".";

describe("0131-palindrome-partitioning", () => {
  it.each([
    [
      "aab",
      [
        ["a", "a", "b"],
        ["aa", "b"],
      ],
    ],
    ["a", [["a"]]],
    [
      "aabb",
      [
        ["a", "a", "b", "b"],
        ["a", "a", "bb"],
        ["aa", "b", "b"],
        ["aa", "bb"],
      ],
    ],
    ["aaa", [["a", "a", "a"], ["a", "aa"], ["aa", "a"], ["aaa"]]],
    [
      "baba",
      [
        ["b", "a", "b", "a"],
        ["b", "aba"],
        ["bab", "a"],
      ],
    ],
  ])("%s", (str, result) => {
    expect(partition(str)).toEqual(result);
  });
});
