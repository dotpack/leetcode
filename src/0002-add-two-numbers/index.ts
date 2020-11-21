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

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode();

  let curr = head;
  let carry = 0;
  while (l1 || l2) {
    const val = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    carry = val >= 10 ? 1 : 0;

    curr.next = new ListNode(val >= 10 ? val - 10 : val);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    curr.next = new ListNode(carry);
  }

  return head.next;
}
