import { detectCycle } from ".";
import { ListNode } from "../0000-core/list-node";

describe("0142-linked-list-cycle-ii", () => {
  it.each([
    [[3, 2, 0, -4], 1],
    [[1, 2], 0],
    [[1], -1],
    [[-1, -7, 7, -4, 19, 6, -9, -5, -2, -5], 6],
  ])("%o => %d", (arr, res) => {
    const node = ListNode.fromArray(arr);
    const curr = node?.getByPos(res);
    const tail = node?.getByPos(arr.length - 1);
    if (tail && curr) {
      tail.next = curr;
    }
    expect(detectCycle(node)).toEqual(curr);
  });
});
