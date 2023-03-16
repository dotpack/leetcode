import { buildTree } from ".";

describe("0106-construct-binary-tree-from-inorder-and-postorder-traversal", () => {
  it.each([
    [
      [9, 3, 15, 20, 7],
      [9, 15, 7, 20, 3],
      [3, 9, 20, null, null, 15, 7],
    ],
    [[-1], [-1], [-1]],
  ])("%o + %o => %o", (inorder, postorder, res) => {
    const tree = buildTree(inorder, postorder);
    expect(tree ? tree.toArray() : null).toEqual(res);
  });
});
