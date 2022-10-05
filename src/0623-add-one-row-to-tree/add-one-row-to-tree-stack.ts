import { TreeNode } from "../0000-core/tree-node";

export function addOneRowToTreeStack(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  const wrap = new TreeNode(0, root);

  const stack: [TreeNode, number][] = [[wrap, 1]];
  while (stack.length) {
    const [node, currentDepth] = stack.pop() as [TreeNode, number];
    if (currentDepth === depth) {
      node.left = new TreeNode(val, node.left);
      node.right = new TreeNode(val, null, node.right);
    } else {
      if (node.left) {
        stack.push([node.left, currentDepth + 1]);
      }
      if (node.right) {
        stack.push([node.right, currentDepth + 1]);
      }
    }
  }

  return wrap.left;
}
