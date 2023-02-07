import { totalFruit } from ".";

describe("0904-fruit-into-baskets", () => {
  it.each([
    [[1, 2, 1], 3],
    [[0, 1, 2, 2], 3],
    [[1, 2, 3, 2, 2], 4],
  ])("%o = %d", (fruits, res) => {
    expect(totalFruit(fruits)).toEqual(res);
  });
});
