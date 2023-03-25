import { countPairs } from ".";
import long from "./long.json";

describe("2316-count-unreachable-pairs-of-nodes-in-an-undirected-graph", () => {
  it.each([
    [
      3,
      [
        [0, 1],
        [0, 2],
        [1, 2],
      ],
      0,
    ],
    [
      7,
      [
        [0, 2],
        [0, 5],
        [2, 4],
        [1, 6],
        [5, 4],
      ],
      14,
    ],
    [632, long, 0],
  ])("%d %o => %d", (n, edges, res) => {
    expect(countPairs(n, edges)).toEqual(res);
  });
});
