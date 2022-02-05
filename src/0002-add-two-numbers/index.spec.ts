import { ListNode } from "../0000-core";
import { addTwoNumbers } from "./index";

describe("0002-add-two-numbers", () => {
  it("returns correct result", () => {
    const a = ListNode.fromArray([3, 4, 2].reverse());
    const b = ListNode.fromArray([4, 6, 5].reverse());
    expect(addTwoNumbers(a, b)?.toArray()).toEqual([8, 0, 7].reverse());
  });

  it("returns correct result when one list is empty", () => {
    const a = ListNode.fromArray([].reverse());
    const b = ListNode.fromArray([1, 0].reverse());
    expect(addTwoNumbers(a, b)?.toArray()).toEqual([1, 0].reverse());
  });

  it("returns correct result when the sum have an extra carry of one at the end", () => {
    const a = ListNode.fromArray([9, 9, 9].reverse());
    const b = ListNode.fromArray([1].reverse());
    expect(addTwoNumbers(a, b)?.toArray()).toEqual([1, 0, 0, 0].reverse());
  });
});
