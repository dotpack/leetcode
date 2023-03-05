import { minJumps } from ".";
import long from "./long.json";

describe("1345-jump-game-iv", () => {
  it.each([
    [3, [100, -23, -23, 404, 100, 23, 23, 23, 3, 404]],
    [0, [7]],
    [1, [7, 6, 9, 6, 9, 6, 9, 7]],
    [2, long],
  ])("returns %d", (res, arr) => {
    expect(minJumps(arr)).toEqual(res);
  });
});
