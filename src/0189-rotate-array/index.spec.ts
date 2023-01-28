import { rotate } from ".";

describe("0189-rotate-array", () => {
  it.each([
    [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
    [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
    [[1, 2, 3, 4, 5, 6], 3, [4, 5, 6, 1, 2, 3]],
  ])("%o and %d => %o", (arr, num, result) => {
    rotate(arr, num);
    console.log(arr, result);
    expect(arr).toEqual(result);
  });
});
