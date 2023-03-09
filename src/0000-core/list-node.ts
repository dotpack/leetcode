export class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}

  static fromArray(arr: number[]): ListNode | null {
    let prev = null;
    let root = null;
    for (const val of arr) {
      const curr = new ListNode(val);
      if (prev) {
        prev.next = curr;
      } else {
        root = curr;
      }
      prev = curr;
    }
    return root;
  }

  toArray(): number[] {
    const arr: number[] = [];

    let curr: ListNode | null = this;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }

  getByPos(pos: number): ListNode | null {
    if (pos < 0) {
      return null;
    }
    let curr: ListNode | null = this;
    while (curr && pos > 0) {
      pos -= 1;
      curr = curr.next;
    }
    return curr;
  }
}
