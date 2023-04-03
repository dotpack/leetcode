import { numRescueBoats } from ".";

describe("0881-boats-to-save-people", () => {
  it.each([
    [[1, 2], 3, 1],
    [[3, 2, 2, 1], 3, 3],
    [[3, 5, 3, 4], 5, 4],
  ])("%o %d => %d", (people, limit, res) => {
    expect(numRescueBoats(people, limit)).toEqual(res);
  });
});
