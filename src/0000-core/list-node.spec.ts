import { ListNode } from "./list-node";

describe("ListNode", () => {
  it("#new", () => {
    const a = new ListNode(0);
    const b = new ListNode(1, a);
    expect(b.next).toBe(a);
  });

  it("#fromArray", () => {
    const x = ListNode.fromArray([1, 2, 3]);
    expect(x?.val).toBe(1);
    expect(x?.next?.val).toBe(2);
    expect(x?.next?.next?.val).toBe(3);
    expect(x?.next?.next?.next).toBe(null);
  });

  it(".toArray", () => {
    const arr = [1, 2, 3];
    const x = ListNode.fromArray(arr);
    expect(x ? x.toArray() : null).toEqual(arr);
  });
});
