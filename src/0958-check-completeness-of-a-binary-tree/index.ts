import { TreeNode } from "../0000-core/tree-node";

export function isCompleteTree(root: TreeNode | null): boolean {
  const q: Array<TreeNode | null> = [];

  let prev = root;
  if (prev) {
    q.push(prev.left);
    q.push(prev.right);
  }
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (node) {
        if (!prev) {
          return false;
        }
        q.push(node.left);
        q.push(node.right);
      }
      prev = node || null;
    }
  }
  return true;
}
