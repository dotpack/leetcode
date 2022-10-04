import { TreeNode } from "../0000-core/tree-node";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  const newTarget = targetSum - root.val;
  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}
