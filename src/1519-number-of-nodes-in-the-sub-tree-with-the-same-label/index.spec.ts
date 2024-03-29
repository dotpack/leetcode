import { countSubTrees } from ".";

describe("1519-number-of-nodes-in-the-sub-tree-with-the-same-label", () => {
  it.each([
    [
      [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      "abaedcd",
      [2, 1, 1, 1, 1, 1, 1],
    ],
    [
      [
        [0, 1],
        [1, 2],
        [0, 3],
      ],
      "bbbb",
      [4, 2, 1, 1],
    ],
    [
      [
        [0, 1],
        [0, 2],
        [1, 3],
        [0, 4],
      ],
      "aabab",
      [3, 2, 1, 1, 1],
    ],
    [
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
      ],
      "aaabaaa",
      [6, 5, 4, 1, 3, 2, 1],
    ],
    [
      [
        [18, 0],
        [22, 18],
        [10, 22],
        [33, 18],
        [11, 0],
        [43, 11],
        [23, 43],
        [1, 23],
        [7, 1],
        [37, 1],
        [15, 43],
        [12, 15],
        [8, 12],
        [21, 12],
        [32, 21],
        [20, 21],
        [5, 20],
        [35, 5],
        [36, 35],
        [26, 35],
        [27, 26],
        [24, 27],
        [39, 24],
        [2, 5],
        [34, 2],
        [9, 34],
        [28, 34],
        [17, 28],
        [25, 28],
        [42, 25],
        [40, 42],
        [16, 40],
        [41, 2],
        [4, 41],
        [3, 4],
        [30, 3],
        [6, 30],
        [38, 3],
        [13, 38],
        [14, 13],
        [19, 38],
        [31, 38],
        [44, 41],
        [29, 44],
      ],
      "mrzfhutojwmxxwrajbnvrzblswnilufibqebjxezraqce",
      [
        2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 3, 3, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
    ],
  ])("returns the correct result", (edges, labels, result) => {
    expect(countSubTrees(edges.length, edges, labels)).toEqual(result);
  });
});
