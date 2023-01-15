import { numberOfGoodPaths } from ".";

describe("2421-number-of-good-paths", () => {
  it.each([
    {
      vals: [1, 3, 2, 1, 3],
      edges: [
        [0, 1],
        [0, 2],
        [2, 3],
        [2, 4],
      ],
      result: 6,
    },
    {
      vals: [1, 1, 2, 2, 3],
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4],
      ],
      result: 7,
    },
    { vals: [1], edges: [], result: 1 },
  ])("returns the correct result $result", ({ vals, edges, result }) => {
    expect(numberOfGoodPaths(vals, edges)).toEqual(result);
  });
});
