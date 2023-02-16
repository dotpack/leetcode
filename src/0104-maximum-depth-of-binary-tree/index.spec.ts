import { maxDepth } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("", () => {
  it.each([
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, null, 2], 2],
  ])("%o -> %d", (arr, res) => {
    expect(maxDepth(TreeNode.fromArray(arr))).toEqual(res);
  });
});
