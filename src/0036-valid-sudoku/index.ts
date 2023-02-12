export function isValidSudoku(board: string[][]): boolean {
  const n = 9;
  const v: boolean[][] = new Array(n).fill(0).map(() => []);
  const h: boolean[][] = new Array(n).fill(0).map(() => []);
  const b: boolean[][] = new Array(n).fill(0).map(() => []);

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === ".") {
        continue;
      }
      const val = Number(board[row][col]);
      if (h[row][val]) {
        return false;
      } else {
        h[row][val] = true;
      }

      if (v[col][val]) {
        return false;
      } else {
        v[col][val] = true;
      }

      const pos = 3 * Math.floor(row / 3) + Math.floor(col / 3);
      if (b[pos][val]) {
        return false;
      } else {
        b[pos][val] = true;
      }
    }
  }

  return true;
}
