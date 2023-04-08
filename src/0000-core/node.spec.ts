import { Node } from "./node";

describe("Node", function () {
  it("#new", () => {
    const a = new Node(0);
    const b = new Node(1, [a]);
    expect(b.neighbors.length).toBe(1);
    expect(b.neighbors[0].val).toBe(a.val);
  });

  it("#fromArray", () => {
    const x = Node.fromArray([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]);
    expect(x?.val).toBe(1);
  });

  it.each([
    [
      [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
    ],
    [[[]]],
    [[]],
  ])(".toArray for %o", (arr) => {
    const x = Node.fromArray(arr);
    expect(x ? x.toArray() : []).toEqual(arr);
  });
});
