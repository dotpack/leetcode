import { TreeNode } from "../0000-core/tree-node";
import { addOneRowToTreeRecursive } from "./add-one-row-to-tree-recursive";
import { addOneRowToTreeStack } from "./add-one-row-to-tree-stack";

describe("0623-add-one-row-to-tree", () => {
  const cases: [(number | null)[], number, number, (number | null)[]][] = [
    [[4, 2, 6, 3, 1, 5], 1, 2, [4, 1, 1, 2, null, null, 6, 3, 1, 5]],
    [[4, 2, null, 3, 1], 1, 3, [4, 2, null, 1, 1, 3, null, null, 1]],
    [[1], 2, 1, [2, 1]],
    [[1, 2, 3, 4], 5, 4, [1, 2, 3, 4, null, null, null, 5, 5]],
    [[1, null, 2], 3, 2, [1, 3, 3, null, null, null, 2]],
    [[1, 2], 3, 2, [1, 3, 3, 2]],
  ];

  it.each(cases)(
    "%o and %d and %d -> %o (recursive)",
    (root, val, depth, result) => {
      const treeNode = TreeNode.fromArray(root);
      expect(addOneRowToTreeRecursive(treeNode, val, depth)?.toArray()).toEqual(
        result
      );
    }
  );

  it.each(cases)(
    "%o and %d and %d -> %o (stack)",
    (root, val, depth, result) => {
      const treeNode = TreeNode.fromArray(root);
      expect(addOneRowToTreeStack(treeNode, val, depth)?.toArray()).toEqual(
        result
      );
    }
  );
});
