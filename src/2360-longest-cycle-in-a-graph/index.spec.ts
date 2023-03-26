import { longestCycle } from ".";

describe("2360-longest-cycle-in-a-graph", () => {
  it.each([
    [[3, 3, 4, 2, 3], 3],
    [[2, -1, 3, 1], -1],
  ])("%o => %d", (edges, res) => {
    expect(longestCycle(edges)).toEqual(res);
  });
});
