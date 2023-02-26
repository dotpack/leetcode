export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const table = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    table[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    table[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          1 + Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]);
      }
    }
  }

  return table[m][n];
}
