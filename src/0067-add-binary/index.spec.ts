import { addBinary } from ".";

describe("0067-add-binary", () => {
  it.each([
    ["11", "1", "100"],
    ["1010", "1011", "10101"],
  ])("%s + %s => %s", (a, b, res) => {
    expect(addBinary(a, b)).toEqual(res);
  });
});
