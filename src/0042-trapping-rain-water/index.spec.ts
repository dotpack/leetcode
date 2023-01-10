import { trap } from "./index";

describe("0042-trapping-rain-water", () => {
  const cases: [number[], number][] = [
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
  ];
  it.each(cases)("%o -> %o", (height, result) => {
    expect(trap(height)).toEqual(result);
  });
});
