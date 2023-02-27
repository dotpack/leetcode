import { Node } from "./node";

export function construct(grid: number[][]): Node | null {
  if (!grid.length) {
    return null;
  }

  function make(
    grid: number[][],
    row: number,
    col: number,
    length: number
  ): Node {
    if (length === 1) {
      return new Node(grid[row][col] === 1 ? true : false, true);
    }

    const half = length / 2;
    const topLeft = make(grid, row, col, half);
    const topRight = make(grid, row, col + half, half);
    const bottomLeft = make(grid, row + half, col, half);
    const bottomRight = make(grid, row + half, col + half, half);

    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      return new Node(topLeft.val, true);
    } else {
      return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return make(grid, 0, 0, grid.length);
}
