import { ListNode } from "../0000-core";
import { partition } from "./index";

describe("0086-partition-list", () => {
  it("works correctly", () => {
    const a = ListNode.fromArray([1, 4, 3, 2, 5, 2]);
    expect(partition(a, 3)?.toArray()).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it("works correctly on small list", () => {
    const a = ListNode.fromArray([2, 1]);
    expect(partition(a, 2)?.toArray()).toEqual([1, 2]);
  });
});
