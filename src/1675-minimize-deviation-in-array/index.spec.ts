import { minimumDeviation } from ".";

describe("1675-minimize-deviation-in-array", () => {
  it.each([
    [[1, 2, 3, 4], 1],
    [[4, 1, 5, 20, 3], 3],
    [[2, 10, 8], 3],
  ])("%o => %res", (arr, res) => {
    expect(minimumDeviation(arr)).toEqual(res);
  });
});
