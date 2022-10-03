import { minCost } from "./index";

describe("1578-minimum-time-to-make-rope-colorful", () => {
  const cases: [string, number[], number][] = [
    ["abaac", [1, 2, 3, 4, 5], 3],
    ["abc", [1, 2, 3], 0],
    ["aabaa", [1, 2, 3, 4, 1], 2],
  ];
  it.each(cases)(
    "returns correct result (colors=%s, neededTime=%o) -> %d",
    (colors, neededTime, result) => {
      expect(minCost(colors, neededTime)).toEqual(result);
    }
  );
});
