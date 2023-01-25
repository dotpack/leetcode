import { closestMeetingNode } from ".";

describe("2359-find-closest-node-to-given-two-nodes", () => {
  it.each([
    [[2, 2, 3, -1], 0, 1, 2],
    [[1, 2, -1], 0, 2, 2],
    [[4, 4, 4, 5, 1, 2, 2], 1, 1, 1],
  ])("%o %d %d => %d", (edges, node1, node2, result) => {
    expect(closestMeetingNode(edges, node1, node2)).toEqual(result);
  });
});
