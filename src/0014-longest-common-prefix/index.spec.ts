import { longestCommonPrefix } from "./index";

describe("0014-longest-common-prefix", () => {
  it.only.each([
    [["flower","flow","flight"], "fl"],
    [["dog","racecar","car"], ""],
    [[], ""],
  ])("%s => %s", (strings, expected) => {
    expect(longestCommonPrefix(strings)).toEqual(expected);
  });
});
