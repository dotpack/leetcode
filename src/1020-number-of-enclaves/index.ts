export function numEnclaves(grid: number[][]): number {
  function dfs(i: number, j: number): void {
    if (grid[i][j] === 0) return;
    grid[i][j] = 0;

    if (i > 0) dfs(i - 1, j);
    if (i < grid.length - 1) dfs(i + 1, j);
    if (j > 0) dfs(i, j - 1);
    if (j < grid[0].length - 1) dfs(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (
        i === 0 ||
        i === grid.length - 1 ||
        j === 0 ||
        j === grid[0].length - 1
      ) {
        dfs(i, j);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) res++;
    }
  }
  return res;
}
