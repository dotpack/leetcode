import { ListNode } from "../0000-core";
import { rotateRight } from "./index";

describe("0061-rotate-right", () => {
  it("works correctly", () => {
    const a = ListNode.fromArray([1, 2, 3, 4, 5]);
    expect(rotateRight(a, 2)?.toArray()).toEqual([4, 5, 1, 2, 3]);
  });

  it("works correctly on small list", () => {
    const a = ListNode.fromArray([0, 1, 2]);
    expect(rotateRight(a, 4)?.toArray()).toEqual([2, 0, 1]);
  });
});
