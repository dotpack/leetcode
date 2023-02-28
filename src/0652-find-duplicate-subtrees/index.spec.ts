import { TreeNode } from "../0000-core/tree-node";
import { findDuplicateSubtrees } from ".";

describe("0652-find-duplicate-subtrees", () => {
  it.each([
    [
      [1, 2, 3, 4, null, 2, 4, null, null, 4],
      [[4], [2, 4]],
    ],
    [[2, 1, 1], [[1]]],
    [
      [2, 2, 2, 3, null, 3, null],
      [[3], [2, 3]],
    ],
  ])("%o -> %o", (arr, res) => {
    const values = findDuplicateSubtrees(TreeNode.fromArray(arr));
    const result = values.map((tree) => tree?.toArray());
    expect(result).toEqual(res);
  });
});
