export function mincostTickets(days: number[], costs: number[]): number {
  const dp = new Array(366).fill(0);

  const travel = days.reduce((acc, d) => {
    acc.add(d);
    return acc;
  }, new Set());

  for (let i = 1; i < 366; i++) {
    if (!travel.has(i)) {
      dp[i] = dp[i - 1];
    } else {
      const d01 = dp[i - 1] + costs[0];
      const d07 = dp[Math.max(0, i - 7)] + costs[1];
      const d30 = dp[Math.max(0, i - 30)] + costs[2];

      dp[i] = Math.min(d01, d07, d30);
    }
  }
  return dp[365];
}
