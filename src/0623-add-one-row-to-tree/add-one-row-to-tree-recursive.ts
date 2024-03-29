import { TreeNode } from "../0000-core/tree-node";

export function addOneRowToTreeRecursive(
  root: TreeNode | null,
  val: number,
  depth: number,
  isRightWay = false
): TreeNode | null {
  if (depth === 1) {
    const node = new TreeNode(val);
    if (isRightWay) {
      node.right = root;
    } else {
      node.left = root;
    }
    return node;
  }

  if (!root) {
    return null;
  }

  root.left = addOneRowToTreeRecursive(root.left, val, depth - 1, false);
  root.right = addOneRowToTreeRecursive(root.right, val, depth - 1, true);
  return root;
}
