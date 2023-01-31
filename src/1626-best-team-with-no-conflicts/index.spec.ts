import { bestTeamScore } from ".";

describe("1626-best-team-with-no-conflicts", () => {
  it.each([
    [[1, 3, 5, 10, 15], [1, 2, 3, 4, 5], 34],
    [[15, 1, 3, 5, 10], [5, 1, 2, 3, 4], 34],
    [[4, 5, 6, 5], [2, 1, 2, 1], 16],
    [[1, 2, 3, 5], [8, 9, 10, 1], 6],
  ])("%o and %o = %d", (scores, ages, result) => {
    expect(bestTeamScore(scores, ages)).toEqual(result);
  });
});
