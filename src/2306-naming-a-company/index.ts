export function distinctNames(ideas: string[]): number {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const n = z - a + 1;

  const arr: Array<Set<string>> = new Array(n).fill(0).map(() => new Set());
  for (const idea of ideas) {
    const char = idea.charCodeAt(0) - a;
    const rest = idea.substring(1);
    arr[char].add(rest);
  }

  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let mutualCount = 0;
      for (const ideaA of arr[i].values()) {
        if (arr[j].has(ideaA)) {
          mutualCount++;
        }
      }

      result += 2 * (arr[i].size - mutualCount) * (arr[j].size - mutualCount);
    }
  }

  return result;
}
