import { invertTree } from ".";
import { TreeNode } from "../0000-core/tree-node";

describe("0226-invert-binary-tree", () => {
  it.each([
    [
      [4, 2, 7, 1, 3, 6, 9],
      [4, 7, 2, 9, 6, 3, 1],
    ],
    [
      [2, 1, 3],
      [2, 3, 1],
    ],
    [[], []],
  ])("%o => %o", (arr, res) => {
    const node = invertTree(TreeNode.fromArray(arr));
    const ans = node === null ? [] : node.toArray();
    expect(ans).toEqual(res);
  });
});
