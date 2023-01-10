import { isSameTree } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0100-same-tree", () => {
  it.each([
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2], [1, null, 2], false],
    [[1, 2, 1], [1, 1, 2], false],
    [[1, 2, 3], [1, 2], false],
  ])("%o and %o -> %v", (p, q, result) => {
    const pTree = TreeNode.fromArray(p);
    const qTree = TreeNode.fromArray(q);
    expect(isSameTree(pTree, qTree)).toEqual(result);
  });
});
