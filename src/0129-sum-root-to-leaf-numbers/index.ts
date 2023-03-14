import { TreeNode } from "../0000-core/tree-node";

export function sumNumbers(root: TreeNode | null): number {
  function sum(root: TreeNode | null, dec: number = 0): number {
    if (!root) {
      return 0;
    }
    const val = root.val;
    if (!root.left && !root.right) {
      return dec + val;
    }
    const newDec = (dec + val) * 10;
    return sum(root.left, newDec) + sum(root.right, newDec);
  }
  return sum(root);
}
