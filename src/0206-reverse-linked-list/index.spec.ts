import { ListNode } from "../0000-core/list-node";
import { reverseList } from "./index";

describe("0206-reverse-linked-list", () => {
  it.each([[[3, 4, 2]], [[1]]])("%o", (arr) => {
    const a = ListNode.fromArray(arr);
    expect(reverseList(a)?.toArray()).toEqual(arr.reverse());
  });
});
