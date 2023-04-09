import { largestPathValue } from "./index";

describe("1857-largest-color-value-in-a-directed-graph", function () {
  it.each([
    [
      "abaca",
      [
        [0, 1],
        [0, 2],
        [2, 3],
        [3, 4],
      ],
      3,
    ],
    ["a", [[0, 0]], -1],
  ])("%s %o => %d", (colors, edges, res) => {
    expect(largestPathValue(colors, edges)).toEqual(res);
  });
});
