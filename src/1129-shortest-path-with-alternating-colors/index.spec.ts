import { shortestAlternatingPaths } from ".";

describe("1129-shortest-path-with-alternating-colors", () => {
  it.each([
    [
      3,
      [
        [0, 1],
        [1, 2],
      ],
      [],
      [0, 1, -1],
    ],
    [3, [[0, 1]], [[2, 1]], [0, 1, -1]],
  ])("%d (%o and %o) => %o", (n, redEdges, blueEdges, result) => {
    expect(shortestAlternatingPaths(n, redEdges, blueEdges)).toEqual(result);
  });
});
