import { makeConnected } from ".";

describe("1319-number-of-operations-to-make-network-connected", () => {
  it.each([
    [
      4,
      [
        [0, 1],
        [0, 2],
        [1, 2],
      ],
      1,
    ],
    [
      6,
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 2],
        [1, 3],
      ],
      2,
    ],
    [
      6,
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 2],
      ],
      -1,
    ],
  ])("%d %o => %d", (n, connections, res) => {
    expect(makeConnected(n, connections)).toEqual(res);
  });
});
