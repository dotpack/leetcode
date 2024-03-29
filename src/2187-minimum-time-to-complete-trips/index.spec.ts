import { minimumTime } from ".";

describe("2187-minimum-time-to-complete-trips", () => {
  it.each([
    [[1, 2, 3], 5, 3],
    [[2], 1, 2],
    [[1, 1, 1], 3, 1],
  ])("%o %d => %d", (arr, totalTrips, res) => {
    expect(minimumTime(arr, totalTrips)).toEqual(res);
  });
});
