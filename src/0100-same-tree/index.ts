import { TreeNode } from "../0000-core/tree-node";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p) {
    return !q;
  }
  if (!q) {
    return !p;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(q.left, p.left) && isSameTree(p.right, q.right);
}
