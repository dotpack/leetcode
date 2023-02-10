export function maxDistance(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const max = rows + cols + 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = max;
        grid[i][j] = Math.min(
          grid[i][j],
          i > 0 ? grid[i - 1][j] + 1 : max,
          j > 0 ? grid[i][j - 1] + 1 : max
        );
      }
    }
  }

  let res = -1;

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      grid[i][j] = Math.min(
        grid[i][j],
        i < rows - 1 ? grid[i + 1][j] + 1 : max,
        j < cols - 1 ? grid[i][j + 1] + 1 : max
      );

      res = Math.max(res, grid[i][j]);
    }
  }

  return res === 0 || res === max ? -1 : res;
}
