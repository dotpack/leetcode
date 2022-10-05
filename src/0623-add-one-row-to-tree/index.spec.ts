import { TreeNode } from "../0000-core/tree-node";
import { addOneRow } from "./index";

describe("0623-add-one-row-to-tree", () => {
  it.each([
    [[4, 2, 6, 3, 1, 5], 1, 2, [4, 1, 1, 2, null, null, 6, 3, 1, 5]],
    [[4, 2, null, 3, 1], 1, 3, [4, 2, null, 1, 1, 3, null, null, 1]],
    [[1], 2, 1, [2, 1]],
    [[1, 2, 3, 4], 5, 4, [1, 2, 3, 4, null, null, null, 5, 5]],
    [[1, null, 2], 3, 2, [1, 3, 3, null, null, null, 2]],
    [[1, 2], 3, 2, [1, 3, 3, 2]],
  ])("%o and %d and %d -> %o", (root, val, depth, result) => {
    const treeNode = TreeNode.fromArray(root);
    expect(addOneRow(treeNode, val, depth)?.toArray()).toEqual(result);
  });
});
