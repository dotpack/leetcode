import { cloneGraph } from "./index";
import { Node } from "../0000-core/node";

describe("0133-clone-graph", () => {
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
  ])("%o", (nodes) => {
    const node = Node.fromArray(nodes);
    const copy = cloneGraph(node);
    expect(copy ? copy.toArray() : []).toEqual(nodes);
  });
});
