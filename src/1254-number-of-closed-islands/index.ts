export function closedIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let count = 0;

  function dfs(x: number, y: number) {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] == 1
    ) {
      return;
    }

    grid[x][y] = 1;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  // exlude corners
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        grid[i][j] === 0 &&
        (i === 0 || i === m - 1 || j === 0 || j === n - 1)
      ) {
        dfs(i, j);
      }
    }
  }

  // count connected component
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] == 0) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}
