import { isCompleteTree } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0958-check-completeness-of-a-binary-tree", () => {
  it.each([
    [[1, 2, 3, 4, 5, 6], true],
    [[1, 2, 3, 4, 5, null, 7], false],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, null, 15], false],
  ])("%o => %o", (arr, res) => {
    expect(isCompleteTree(TreeNode.fromArray(arr))).toEqual(res);
  });
});
