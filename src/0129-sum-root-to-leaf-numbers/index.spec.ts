import { sumNumbers } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0129-sum-root-to-leaf-numbers", () => {
  it.each([
    [[1, 2, 3], 25],
    [[4, 9, 0, 5, 1], 1026],
  ])("%o => %d", (arr, res) => {
    expect(sumNumbers(TreeNode.fromArray(arr))).toEqual(res);
  });
});
