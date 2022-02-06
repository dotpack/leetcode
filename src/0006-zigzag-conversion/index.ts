export function convert(s: string, numRows: number): string {
  let result = '';

  const headNumRows = numRows;
  const tailNumRows = Math.max(numRows - 2, 0);
  const fullNumRows = headNumRows + tailNumRows;

  for (let i = 0; i < numRows; i++) {
    let headPosition = i;
    let tailPosition = i > 0 && i < numRows - 1 ? fullNumRows - i: 0;
    while (headPosition < s.length) {
      result += s[headPosition];
      if (tailPosition && tailPosition < s.length) {
        result += s[tailPosition];
        tailPosition += fullNumRows;
      }
      headPosition += fullNumRows;
    }
  }

  return result;
}
