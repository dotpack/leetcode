import { findSubsequences } from ".";

describe("0491-non-decreasing-subsequences", () => {
  it.each([
    [
      [4, 6, 7, 7],
      [
        [4, 6],
        [4, 6, 7],
        [4, 6, 7, 7],
        [4, 7],
        [4, 7, 7],
        [6, 7],
        [6, 7, 7],
        [7, 7],
      ],
    ],
    [[4, 4, 3, 2, 1], [[4, 4]]],
  ])("correct result for %o", (arr, result) => {
    const a = findSubsequences(arr).map((x) => x.join("."));
    a.sort();
    const b = result.map((r) => r.join("."));
    b.sort();
    expect(a).toEqual(b);
  });
});
