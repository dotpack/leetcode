import { mergeKLists } from ".";
import { ListNode } from "../0000-core";

describe("0023-merge-k-sorted-lists", () => {
  it.each([
    [
      [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
      [1, 1, 2, 3, 4, 4, 5, 6],
    ],
    [[], []],
    [[[]], []],
  ])("return merged list", (arr, res) => {
    const lists = arr.map((a) => ListNode.fromArray(a));
    const ans = mergeKLists(lists);
    expect(ans ? ans.toArray() : []).toEqual(res);
  });
});
