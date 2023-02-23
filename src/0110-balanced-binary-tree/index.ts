import { TreeNode } from "../0000-core/tree-node";

export function isBalanced(root: TreeNode | null): boolean {
  function getHeight(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }
    const lh = getHeight(root.left);
    if (lh === -1) {
      return -1;
    }
    const rh = getHeight(root.right);
    if (rh === -1) {
      return -1;
    }
    if (Math.abs(lh - rh) > 1) {
      return -1;
    }
    return Math.max(lh, rh) + 1;
  }

  return getHeight(root) !== -1;
}
