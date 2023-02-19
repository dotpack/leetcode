import { zigzagLevelOrder } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0103-binary-tree-zigzag-level-order-traversal", () => {
  it.each([
    [
      [3, 9, 20, null, null, 15, 7],
      [[3], [20, 9], [15, 7]],
    ],
    [[1], [[1]]],
    [[], []],
  ])("%o => %o", (arr, res) => {
    expect(zigzagLevelOrder(TreeNode.fromArray(arr))).toEqual(res);
  });
});
