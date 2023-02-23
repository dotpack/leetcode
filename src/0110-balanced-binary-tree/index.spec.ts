import { isBalanced } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0110-balanced-binary-tree", () => {
  it.each([
    [[3, 9, 20, null, null, 15, 7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
    [[], true],
    [[1, 2, 2, 3, null, null, 3, 4, null, null, 4], false],
  ])("%o => %o", (arr, res) => {
    expect(isBalanced(TreeNode.fromArray(arr))).toEqual(res);
  });
});
