export function isPalindrome(s: string): boolean {
  const map = ["az", "AZ", "09"].reduce<Record<string, boolean>>((acc, az) => {
    const f = az.charCodeAt(0);
    const t = az.charCodeAt(1);
    for (let i = f; i <= t; i++) {
      const char = String.fromCharCode(i);
      acc[char] = true;
    }
    return acc;
  }, {});

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!map[s[i]]) {
      i++;
      continue;
    }
    if (!map[s[j]]) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
