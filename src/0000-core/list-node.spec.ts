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

  it(".getByPos", () => {
    const arr = [1, 2, 3];
    const x = ListNode.fromArray(arr);
    expect(x ? x.getByPos(-1)?.val : null).toEqual(undefined);
    expect(x ? x.getByPos(0)?.val : null).toEqual(1);
    expect(x ? x.getByPos(1)?.val : null).toEqual(2);
    expect(x ? x.getByPos(2)?.val : null).toEqual(3);
    expect(x ? x.getByPos(3)?.val : null).toEqual(undefined);
  });
});
