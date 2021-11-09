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

export function partition(head: ListNode | null, x: number): ListNode | null {
  const root = new ListNode(0, head);
  let curr = root;
  let prev = root;
  while (curr.next) {
    const next = curr.next;
    if (next.val < x) {
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
      prev = next;
    }
    curr = next;
  }
  return root.next;
}
