import { ListNode } from "../0000-core/list-node";
import { TreeNode } from "../0000-core/tree-node";

export function sortedListToBST(
  head: ListNode | null,
  tail: ListNode | null = null
): TreeNode | null {
  if (head === tail) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast !== tail && fast?.next !== tail) {
    fast = fast?.next?.next || null;
    slow = slow?.next || null;
  }

  if (!slow) {
    return null;
  }

  const thead = new TreeNode(slow.val);
  thead.left = sortedListToBST(head, slow);
  thead.right = sortedListToBST(slow.next || null, tail);

  return thead;
}
