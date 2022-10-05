import { TreeNode } from "./tree-node";

describe("TreeNode", () => {
  describe("#new", () => {
    it("returns correct TreeNode", () => {
      const l = new TreeNode("l");
      const r = new TreeNode("r");
      const i = new TreeNode("i", l, r);
      expect(i.val).toBe("i");
      expect(i.left).toBe(l);
      expect(i.right).toBe(r);
    });
  });

  describe("#fromArray", () => {
    it("returns correct TreeNode", () => {
      const x = TreeNode.fromArray([
        5,
        4,
        8,
        11,
        null,
        13,
        4,
        7,
        2,
        null,
        null,
        null,
        1,
      ]);
      expect(x?.val).toBe(5);

      expect(x?.left?.val).toBe(4);
      expect(x?.left?.left?.val).toBe(11);
      expect(x?.left?.left?.left?.val).toBe(7);
      expect(x?.left?.left?.left?.left).toBe(null);
      expect(x?.left?.left?.left?.right).toBe(null);
      expect(x?.left?.left?.right?.val).toBe(2);
      expect(x?.left?.left?.right?.left).toBe(null);
      expect(x?.left?.left?.right?.right).toBe(null);
      expect(x?.left?.right).toBe(null);

      expect(x?.right?.val).toBe(8);
      expect(x?.right?.left?.val).toBe(13);
      expect(x?.right?.left?.left).toBe(null);
      expect(x?.right?.left?.right).toBe(null);
      expect(x?.right?.right?.val).toBe(4);
      expect(x?.right?.right?.left).toBe(null);
      expect(x?.right?.right?.right?.val).toBe(1);
      expect(x?.right?.right?.right?.left).toBe(null);
      expect(x?.right?.right?.right?.right).toBe(null);
    });

    it("returns null when array is empty", () => {
      const x = TreeNode.fromArray([]);
      expect(x).toBe(null);
    });

    it("returns null when array is strange", () => {
      const x = TreeNode.fromArray([1, null, 1, null, null, 1, null, 1]);
      expect(x?.toArray()).toEqual([1, null, 1]);
    });

    it("throws an RangeError when root is null", () => {
      expect(() => TreeNode.fromArray([null])).toThrow(RangeError);
    });
  });

  describe(".toArray", () => {
    it.each([
      [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]],
      [[4, 2, 6, 3, 1, 5]],
    ])("returns correct array for %o", (arr) => {
      const x = TreeNode.fromArray(arr);
      expect(x ? x.toArray() : null).toEqual(arr);
    });
  });
});
