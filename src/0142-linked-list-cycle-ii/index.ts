import { ListNode } from "../0000-core";

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let from: ListNode | null = head;
  while (fast.next && fast.next.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow !== from) {
        slow = slow?.next || null;
        from = from?.next || null;
      }
      return from;
    }
  }

  return null;
}
