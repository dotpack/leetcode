import { ListNode } from "../0000-core/list-node";
import { mergeTwoLists } from "./index";

describe("0021-merge-two-sorted-lists", () => {
  it.only.each([
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4],
    ],
    [[], [], undefined],
    [[], [0], [0]],
  ])("%s + %s = %s", (l1, l2, expectation) => {
    expect(
      mergeTwoLists(ListNode.fromArray(l1), ListNode.fromArray(l2))?.toArray()
    ).toEqual(expectation);
  });
});
