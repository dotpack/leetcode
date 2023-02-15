import { addToArrayForm } from ".";

describe("0989-add-to-array-form-of-integer", () => {
  it.each([
    [[1, 2, 0, 0], 34, [1, 2, 3, 4]],
    [[2, 7, 4], 181, [4, 5, 5]],
    [[2, 1, 5], 806, [1, 0, 2, 1]],
  ])("%o + %d = %o", (num, k, res) => {
    expect(addToArrayForm(num, k)).toEqual(res);
  });
});
