import { TreeNode } from "../0000-core/tree-node";

export function minDiffInBST(root: TreeNode | null): number {
  const arr: number[] = [];

  function fill(root: TreeNode | null): void {
    if (!root) {
      return;
    }
    fill(root.left);
    arr.push(root.val);
    fill(root.right);
  }

  fill(root);

  let min = +Infinity;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));
  }
  return min;
}
