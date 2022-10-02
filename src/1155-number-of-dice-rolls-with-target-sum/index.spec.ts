import { numRollsToTarget } from "./index";

describe("1155-number-of-dice-rolls-with-target-sum", () => {
  const cases: [number, number, number, number][] = [
    [1, 6, 3, 1],
    [2, 6, 2, 1],
    [2, 6, 3, 2],
    [2, 6, 7, 6],
    [3, 6, 6, 10],
    [30, 30, 500, 222616187],
  ];
  it.each(cases)(
    "returns correct result: %d, %d, %d -> %d",
    (n, k, target, result) => {
      expect(numRollsToTarget(n, k, target)).toEqual(result);
    }
  );
});
