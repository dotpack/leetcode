import { canPlaceFlowers } from ".";

describe("0605-can-place-flowers", () => {
  it.each([
    [[1, 0, 0, 0, 0, 1], 2, false],
    [[1, 0, 0, 0, 1], 1, true],
    [[1, 0, 0, 0, 1], 2, false],
    [[0, 0, 0], 1, true],
    [[0, 0, 0], 2, true],
  ])("%o and %d => %o", (flowerbed, n, res) => {
    expect(canPlaceFlowers(flowerbed, n)).toEqual(res);
  });
});
