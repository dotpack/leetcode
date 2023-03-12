import { sortedListToBST } from ".";
import { ListNode } from "../0000-core/list-node";

describe("0109-convert-sorted-list-to-binary-search-tree", () => {
  it.each([
    [
      [-10, -3, 0, 5, 9],
      [0, -3, 9, -10, null, 5],
    ],
    [[], []],
  ])("%o => %o", (arr, res) => {
    const ans = sortedListToBST(ListNode.fromArray(arr));
    expect(ans ? ans.toArray() : []).toEqual(res);
  });
});
