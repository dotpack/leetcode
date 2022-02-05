export function longestCommonPrefix(lines: string[]): string {
  if (!lines.length) {
    return "";
  }

  let str = "";
  let pos = 0;
  while (pos < lines[0].length) {
    const symbol = lines[0][pos];
    for (let i = 1; i < lines.length; i++) {
      if (pos >= lines[i].length || lines[i][pos] !== symbol) {
        return str;
      }
    }
    str += symbol;
    pos += 1;
  }
  return str;
}
