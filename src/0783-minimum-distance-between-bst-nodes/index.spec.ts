import { minDiffInBST } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0783-minimum-distance-between-bst-nodes", () => {
  it.each([
    [[4, 2, 6, 1, 3], 1],
    [[1, 0, 48, null, null, 12, 49], 1],
    [[90, 69, null, 49, 89, null, 52], 1],
  ])("%o => %d", (arr, res) => {
    expect(minDiffInBST(TreeNode.fromArray(arr))).toEqual(res);
  });
});
