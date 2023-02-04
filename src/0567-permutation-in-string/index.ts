export function checkInclusion(s1: string, s2: string): boolean {
  const n = s1.length;

  const hash: Record<string, boolean> = {};
  for (let i = 0; i < n; i++) {
    hash[s1[i]] = true;
  }

  let set = new Set<string>();
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (hash[char]) {
      set.add(char);
    } else {
      if (set.size === n) {
        return true;
      }
      set = new Set<string>();
    }
  }

  return false;
}
