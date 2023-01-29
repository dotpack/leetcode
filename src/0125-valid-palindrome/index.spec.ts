import { isPalindrome } from ".";

describe("0125-valid-palindrome", () => {
  it.each([
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    [" ", true],
    ["0P", false],
    ["ab_a", true],
  ])("%s -> %o", (str, res) => {
    expect(isPalindrome(str)).toEqual(res);
  });
});
