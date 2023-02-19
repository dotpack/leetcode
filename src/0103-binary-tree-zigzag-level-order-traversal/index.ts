import { TreeNode } from "../0000-core/tree-node";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = [];

  function run(root: TreeNode | null, level: number): void {
    if (!root) {
      return;
    }

    ans[level] = ans[level] || [];
    if (level % 2 === 0) {
      ans[level].push(root.val);
    } else {
      ans[level].unshift(root.val);
    }
    run(root.left, level + 1);
    run(root.right, level + 1);
  }

  run(root, 0);

  return ans;
}
