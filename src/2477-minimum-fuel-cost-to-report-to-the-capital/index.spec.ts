import { minimumFuelCost } from ".";

describe("2477-minimum-fuel-cost-to-report-to-the-capital", () => {
  it.each([
    [
      [
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      5,
      3,
    ],
    [
      [
        [3, 1],
        [3, 2],
        [1, 0],
        [0, 4],
        [0, 5],
        [4, 6],
      ],
      2,
      7,
    ],
    [[], 1, 0],
  ])("%o %d => %d", (roads, seats, result) => {
    expect(minimumFuelCost(roads, seats)).toEqual(result);
  });
});
