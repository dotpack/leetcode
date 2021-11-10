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

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  // count length and make the circle
  let size = 1;
  let prev = head;
  while (prev.next) {
    size++;
    prev = prev.next;
  }
  prev.next = head;

  // rotate the circle
  let mod = size - (k % size);
  while (mod) {
    prev = prev.next || prev;
    mod--;
  }

  // crop the circle
  const root = prev.next;
  prev.next = null;
  return root;
}
