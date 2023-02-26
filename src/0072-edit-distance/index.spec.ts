import { minDistance } from ".";

describe("0072-edit-distance", () => {
  it.each([
    ["horse", "ros", 3],
    ["intention", "execution", 5],
  ])("%s and %s => %d", (s1, s2, res) => {
    expect(minDistance(s1, s2)).toEqual(res);
  });
});
