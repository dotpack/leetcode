import { ListNode } from "../0000-core/list-node";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  function mergeLists(
    n1: ListNode | null,
    n2: ListNode | null
  ): ListNode | null {
    let root = new ListNode();
    let curr = root;
    while (n1 && n2) {
      if (n1.val <= n2.val) {
        curr.next = n1;
        n1 = n1.next;
      } else {
        curr.next = n2;
        n2 = n2.next;
      }
      curr = curr.next;
    }

    if (n1) {
      curr.next = n1;
    }
    if (n2) {
      curr.next = n2;
    }
    return root.next;
  }

  while (lists.length > 1) {
    const merged: Array<ListNode | null> = [];
    for (let i = 0; i < lists.length; i += 2) {
      merged.push(mergeLists(lists[i], lists[i + 1]));
    }
    lists = merged;
  }
  return lists[0] || null;
}
