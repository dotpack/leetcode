import { TreeNode } from "../0000-core/tree-node";
import { preorderTraversal } from ".";

describe("0144-binary-tree-preorder-traversal", () => {
  const cases: [(number | null)[], number[]][] = [
    [
      [1, null, 2, 3],
      [1, 2, 3],
    ],
    [[1], [1]],
    [[], []],
    [
      [1, 2, 3, 4, 5],
      [1, 2, 4, 5, 3],
    ],
  ];

  it.each(cases)("%o and %d and %d -> %o (recursive)", (root, result) => {
    const treeNode = TreeNode.fromArray(root);
    expect(preorderTraversal(treeNode)).toEqual(result);
  });
});
