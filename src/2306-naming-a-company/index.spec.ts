import { distinctNames } from ".";
import long from "./long.json";

describe("2306-naming-a-company", () => {
  it.each([
    [["coffee", "donuts", "time", "toffee"], 6],
    [["lack", "back"], 0],
    [long, 58289912],
  ])("%o => %d", (ideas, result) => {
    expect(distinctNames(ideas)).toEqual(result);
  });
});
