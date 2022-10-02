export function numRollsToTarget(n: number, k: number, target: number): number {
  const modulo = Math.pow(10, 9) + 7;
  const cache: number[][] = [];

  function dp(n: number, target: number): number {
    if (n === 0) {
      return target > 0 ? 0 : 1;
    }
    if (cache[n] && typeof cache[n][target] !== "undefined") {
      return cache[n][target];
    }

    let total = 0;
    for (let i = Math.max(0, target - k); i < target; i++) {
      total += dp(n - 1, i) % modulo;
    }
    cache[n] = cache[n] || [];
    cache[n][target] = total;
    return cache[n][target];
  }

  return dp(n, target) % modulo;
}
