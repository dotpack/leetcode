import { isValid } from ".";

describe("0020-valid-parentheses", () => {
  it.each([
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["[", false],
  ])("%s => %o", (s, result) => {
    expect(isValid(s)).toEqual(result);
  });
});
