import { partitionString } from ".";

describe("2405-optimal-partition-of-string", () => {
  it.each([
    ["abacaba", 4],
    ["ssssss", 6],
  ])("%s => %d", (str, res) => {
    expect(partitionString(str)).toEqual(res);
  });
});
