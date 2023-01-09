import { TreeNode } from "../0000-core/tree-node";

export function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  if (root) {
    stack.unshift(root);
  }
  while (stack.length) {
    const node = stack.shift();
    if (!node) {
      continue;
    }
    result.push(node.val);
    if (node.right) {
      stack.unshift(node.right);
    }
    if (node.left) {
      stack.unshift(node.left);
    }
  }
  return result;
}
