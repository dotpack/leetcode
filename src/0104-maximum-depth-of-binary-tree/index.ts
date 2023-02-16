import { TreeNode } from "../0000-core/tree-node";

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
}
