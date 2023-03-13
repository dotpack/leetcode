import { isSymmetric } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0101-symmetric-tree", () => {
  it.each([
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
  ])("%o => %o", (arr, res) => {
    expect(isSymmetric(TreeNode.fromArray(arr))).toEqual(res);
  });
});
