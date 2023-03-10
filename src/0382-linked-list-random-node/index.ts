import { ListNode } from "../0000-core";

export class Solution {
  constructor(private readonly head: ListNode | null) {}

  getRandom(): number {
    let ans = -1;
    let num = +1;
    let head = this.head;
    while (head) {
      if (Math.floor(num * Math.random()) === 0) {
        ans = head.val;
      }
      head = head.next;
      num++;
    }
    return ans;
  }
}
