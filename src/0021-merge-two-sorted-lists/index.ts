/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from "../0000-core";

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const root = new ListNode();

  let curr: ListNode = root;
  while (l1 || l2) {
    if (l1 && (!l2 || l1.val < l2.val)) {
      curr.next = l1;
      l1 = l1.next;
      curr = curr.next;
    } else if (l2) {
      curr.next = l2;
      l2 = l2.next;
      curr = curr.next;
    }
  }

  return root.next;
}
