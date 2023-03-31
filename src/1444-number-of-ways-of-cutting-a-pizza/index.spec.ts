import { ways } from ".";

describe("1444-number-of-ways-of-cutting-a-pizza", () => {
  it.each([
    [["A..", "AAA", "..."], 3, 3],
    [["A..", "AA.", "..."], 3, 1],
    [["A..", "A..", "..."], 1, 1],
  ])("%o %d => %d", (pizza, k, res) => {
    expect(ways(pizza, k)).toEqual(res);
  });
});
