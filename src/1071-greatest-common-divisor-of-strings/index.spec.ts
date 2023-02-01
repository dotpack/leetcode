import { gcdOfStrings } from ".";

describe("1071-greatest-common-divisor-of-strings", () => {
  it.each([
    ["ABCABC", "ABC", "ABC"],
    ["ABABAB", "ABAB", "AB"],
    ["LEET", "CODE", ""],
    ["ABABABAB", "ABAB", "ABAB"],
    ["ABCDEF", "ABC", ""],
  ])("%s and %s = %s", (str1, str2, result) => {
    expect(gcdOfStrings(str1, str2)).toEqual(result);
  });
});
