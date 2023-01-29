import { LFUCache } from ".";

describe("0460-lfu-cache", () => {
  it.each([
    [
      [
        "LFUCache",
        "put",
        "put",
        "get",
        "put",
        "get",
        "get",
        "put",
        "get",
        "get",
        "get",
      ],
      [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]],
      [null, null, null, 1, null, -1, 3, null, -1, 3, 4],
    ],
  ])("returns correct result", (methods, inputs, result) => {
    const acc: any[] = [null];
    const lfu = new LFUCache(inputs[0][0] as any);
    for (let i = 1; i < methods.length; i++) {
      const method = methods[i] as keyof LFUCache;
      const [a, b] = inputs[i] as any;
      const res = lfu[method](a, b);
      acc.push(res === undefined ? null : res);
    }
    expect(acc).toEqual(result);
  });
});
