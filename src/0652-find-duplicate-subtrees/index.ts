import { TreeNode } from "../0000-core/tree-node";

export function findDuplicateSubtrees(
  root: TreeNode | null
): Array<TreeNode | null> {
  const map: Record<string, number> = {};
  const res: Array<TreeNode | null> = [];

  function toString(tree: TreeNode | null): string {
    if (!tree) {
      return "";
    }
    const left = toString(tree.left);
    const right = toString(tree.right);
    const curr = `${tree.val}_${left}_${right}`;
    map[curr] = (map[curr] || 0) + 1;
    if (map[curr] === 2) {
      res.push(tree);
    }
    return curr;
  }

  toString(root);
  return res;
}
