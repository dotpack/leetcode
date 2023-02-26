export function minDistance(word1: string, word2: string): number {
  function calc(
    word1: string,
    word2: string,
    i: number,
    j: number,
    memo: number[][]
  ): number {
    if (i === word1.length && j === word2.length) {
      return 0;
    }
    if (i === word1.length) {
      return word2.length - j;
    }
    if (j === word2.length) {
      return word1.length - i;
    }

    if (memo[i] && memo[i][j] !== undefined) {
      return memo[i][j];
    }

    let ans = 0;
    if (word1[i] === word2[j]) {
      ans = calc(word1, word2, i + 1, j + 1, memo);
    } else {
      const insertCount = 1 + calc(word1, word2, i, j + 1, memo);
      const deleteCount = 1 + calc(word1, word2, i + 1, j, memo);
      const replaceCount = 1 + calc(word1, word2, i + 1, j + 1, memo);
      ans = Math.min(insertCount, deleteCount, replaceCount);
    }

    memo[i] = memo[i] || [];
    memo[i][j] = ans;
    return memo[i][j];
  }

  const memo: number[][] = [];
  return calc(word1, word2, 0, 0, memo);
}
