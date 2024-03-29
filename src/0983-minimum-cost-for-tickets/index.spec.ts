import { mincostTickets } from ".";

describe("0983-minimum-cost-for-tickets", () => {
  it.each([
    [[1, 4, 6, 7, 8, 20], [2, 7, 15], 11],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15], 17],
  ])("%o and %o => %res", (days, costs, res) => {
    expect(mincostTickets(days, costs)).toEqual(res);
  });
});
