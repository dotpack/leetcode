import { TreeNode } from "../0000-core/tree-node";

export function isSymmetric(root: TreeNode | null): boolean {
  const q: Array<TreeNode | null> = [root];

  while (q.length) {
    const mid = Math.floor(q.length / 2);
    const len = q.length - 1;
    for (let i = 0; i < mid; i++) {
      const j = len - i;
      if (q[i]?.val !== q[j]?.val) {
        return false;
      }
    }
    for (let i = 0; i <= len; i++) {
      const node = q.shift();
      if (node) {
        q.push(node.left);
        q.push(node.right);
      }
    }
  }

  return true;
}
