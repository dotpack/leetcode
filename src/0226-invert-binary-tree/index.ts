import { TreeNode } from "../0000-core/tree-node";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }
  const temp: TreeNode[] = [];
  temp.push(root);

  while (temp.length) {
    const node = temp.shift();
    if (!node) {
      continue;
    }
    const copy = node.left;
    node.left = node.right;
    node.right = copy;
    if (node.left) {
      temp.push(node.left);
    }
    if (node.right) {
      temp.push(node.right);
    }
  }

  return root;
}
