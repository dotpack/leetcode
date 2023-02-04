import { checkInclusion } from ".";

describe("0567-permutation-in-string", () => {
  it.each([
    ["ab", "eidbaooo", true],
    ["adb", "eidbaooo", true],
    ["ab", "eidboaoo", false],
  ])("%s and %s => %o", (s1, s2, res) => {
    expect(checkInclusion(s1, s2)).toEqual(res);
  });
});
