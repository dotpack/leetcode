import { jump } from ".";

describe("0045-jump-game-ii", () => {
  it.each([
    [[2, 3, 1, 1, 4], 2],
    [[2, 3, 0, 1, 4], 2],
  ])("%o => %d", (arr, res) => {
    expect(jump(arr)).toEqual(res);
  });
});
