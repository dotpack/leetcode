export function isAlienSorted(words: string[], order: string): boolean {
  const hash: Record<string, number> = {};
  for (let i = 0; i < order.length; i++) {
    hash[order[i]] = i + 1;
  }

  const max = words.reduce(
    (max, word) => Math.max(max, word.length),
    -Infinity
  );

  const wordIds = words.map((_, i) => i);
  for (let i = 0; i < max; i++) {
    if (wordIds.length < 2) {
      break;
    }

    for (let j = 1; j < wordIds.length; j++) {
      const prev = hash[words[wordIds[j - 1]][i]] || 0;
      const curr = hash[words[wordIds[j]][i]] || 0;
      if (prev > curr) {
        return false;
      } else if (prev < curr) {
        wordIds.splice(j - 1, 1);
      }
    }
  }

  return true;
}
