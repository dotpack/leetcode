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

import { ListNode } from "../0000-core/list-node";

export function reverseList(list: ListNode | null): ListNode | null {
  let prev = null;
  while (list) {
    const next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }
  return prev;
}
