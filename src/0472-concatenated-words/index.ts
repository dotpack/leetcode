export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  const sizes: Record<number, boolean> = {};
  const items: Record<string, boolean> = {};
  for (const word of words) {
    sizes[word.length] = true;
    items[word] = true;
  }

  const result: string[] = [];
  for (const word of words) {
    const n = word.length;
    const dp: boolean[] = [];
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
      for (let j = i === n ? 1 : 0; !dp[i] && j < i; j++) {
        dp[i] = dp[j] && sizes[i - j] && items[word.substring(j, i)];
      }
    }
    if (dp[n]) {
      result.push(word);
    }
  }
  return result;
}
