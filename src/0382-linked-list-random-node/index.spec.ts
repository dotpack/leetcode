import { Solution } from ".";
import { ListNode } from "../0000-core/list-node";

describe("0382-linked-list-random-node", () => {
  it.each([[5000, [10, 100, 100, 20, 20, 100]]])(
    "returns random values",
    (count, arr) => {
      const p1 = 1 / arr.length;
      const map = arr.reduce<Record<number, [number, number]>>((acc, num) => {
        acc[num] = acc[num] || [0, 0];
        acc[num][0] += p1;
        return acc;
      }, {});

      const p2 = 1 / count;
      const sol = new Solution(ListNode.fromArray(arr));
      for (let i = 0; i < count; i++) {
        const val = sol.getRandom();
        map[val] = map[val] || [0, 0];
        map[val][1] += p2;
      }

      Object.values(map)
        .map(([p1, p2]) => Math.abs(p1 - p2))
        .forEach((val) => {
          expect(val).toBeLessThan(0.03);
        });
    }
  );
});
