export function minDistance(word1: string, word2: string): number {
  if (!word1 && !word2) {
    return 0;
  }
  if (!word1) {
    return word2.length;
  }
  if (!word2) {
    return word1.length;
  }

  const subWord1 = word1.substring(1);
  const subWord2 = word2.substring(1);
  if (word1[0] === word2[0]) {
    return minDistance(subWord1, subWord2);
  }
  const insertCount = 1 + minDistance(word1, subWord2);
  const deleteCount = 1 + minDistance(subWord1, word2);
  const replaceCount = 1 + minDistance(subWord1, subWord2);
  return Math.min(insertCount, deleteCount, replaceCount);
}
