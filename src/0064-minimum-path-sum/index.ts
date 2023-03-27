export function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[][] = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      const curr = grid[i][j];
      if (i === 0 && j === 0) {
        dp[i][j] = curr;
      } else {
        const up = i === 0 ? Infinity : dp[i - 1][j];
        const left = j === 0 ? Infinity : dp[i][j - 1];
        dp[i][j] = Math.min(up, left) + curr;
      }
    }
  }

  return dp[m - 1][n - 1] || 0;
}
