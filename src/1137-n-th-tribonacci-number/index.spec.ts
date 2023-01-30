import { tribonacci } from ".";

describe("1137-n-th-tribonacci-number", () => {
  it.each([
    [3, 4, 4],
    [3, 25, 1389537],
    [2, 10, 55],
  ])("fib%d(%d) => %d", (m, n, res) => {
    expect(tribonacci(n, m)).toEqual(res);
  });
});
