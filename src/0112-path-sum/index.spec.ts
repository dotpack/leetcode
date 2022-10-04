import { TreeNode } from "../0000-core/tree-node";
import { hasPathSum } from "./index";

describe("0112-path-sum", () => {
  it.each([
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22, true],
    [[1, 2, 3], 5, false],
    [[], 0, false],
  ])("%o and %d -> %o", (arr, target, result) => {
    const treeNode = TreeNode.fromArray(arr);
    expect(hasPathSum(treeNode, target)).toEqual(result);
  });
});
