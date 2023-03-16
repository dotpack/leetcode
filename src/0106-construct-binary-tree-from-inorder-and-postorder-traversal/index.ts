import { TreeNode } from "../0000-core/tree-node";

export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  const map = inorder.reduce<Record<number, number>>((acc, val, i) => {
    acc[val] = i;
    return acc;
  }, {});

  function build(f: number, t: number): TreeNode | null {
    if (f > t) {
      return null;
    }
    const val = postorder.pop();
    if (val === undefined) {
      return null;
    }
    const node = new TreeNode(val);
    const mid = map[val];
    node.right = build(mid + 1, t);
    node.left = build(f, mid - 1);
    return node;
  }
  return build(0, postorder.length - 1);
}
