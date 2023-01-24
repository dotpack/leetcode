export function snakesAndLadders(board: number[][]): number {
  const rows = board.length;
  const cols = board[0]?.length || 0;
  const last = rows * cols;

  function getRowAndCol(i: number): [number, number] {
    const pos = i - 1;
    const mod = pos % rows;
    const div = (pos - mod) / rows;
    const row = rows - div - 1;
    const col = div % 2 === 0 ? mod : cols - mod - 1;
    return [row, col];
  }

  let set = new Set();
  const queue: [number, number][] = [[1, 0]];
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) {
      return -1;
    }
    const [pos, moves] = item;
    for (let i = 1; i < 7; i++) {
      let newPos = i + pos;
      const [r, c] = getRowAndCol(newPos);
      if (board[r][c] != -1) {
        newPos = board[r][c];
      }
      if (newPos == last) {
        return moves + 1;
      }
      if (!set.has(newPos)) {
        set.add(newPos);
        queue.push([newPos, moves + 1]);
      }
    }
  }

  return -1;
}
