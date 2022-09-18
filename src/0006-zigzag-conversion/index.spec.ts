import { convert } from "./index";

describe("0006-zigzag-conversion", () => {
  it.each([
    ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
    ["PAYPALISHIRING", 4, "PINALSIGYAHRPI"],
    ["a", 1, "a"],
  ])("%s with %s => %s", (s, rowCount, expectation) => {
    expect(convert(s, rowCount)).toEqual(expectation);
  });
});
