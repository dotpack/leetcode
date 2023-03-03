import { compress } from ".";

describe("0443-string-compression", () => {
  it.each([
    [
      ["a", "a", "b", "b", "c", "c", "c"],
      ["a", "2", "b", "2", "c", "3"],
    ],
    [["a"], ["a"]],
    [
      ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["a", "b", "1", "2"],
    ],
    [
      ["a", "a", "a", "b", "b", "a", "a"],
      ["a", "3", "b", "2", "a", "2"],
    ],
    [
      ["a", "a", "a", "a", "a", "b"],
      ["a", "5", "b"],
    ],
  ])("%o => %d and %o", (arr, res) => {
    expect(compress(arr)).toEqual(res.length);
    expect(arr.slice(0, res.length)).toEqual(res);
  });
});
