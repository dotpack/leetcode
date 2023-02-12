import { searchInsert } from ".";

describe("0035-search-insert-position", () => {
  it.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[5], 1, 0],
    [[5], 6, 1],
  ])("%o and %d => %d", (arr, val, res) => {
    expect(searchInsert(arr, val)).toEqual(res);
  });
});
