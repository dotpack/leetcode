import { numDecodings } from "./index";

describe("0091-decode-ways", () => {
  const cases: [string, number][] = [
    ["", 0],
    ["12", 2],
    ["226", 3],
    ["06", 0],
    ["99", 1],
  ];
  it.each(cases)("returns correct result: %s -> %d", (string, result) => {
    expect(numDecodings(string)).toEqual(result);
  });
});
