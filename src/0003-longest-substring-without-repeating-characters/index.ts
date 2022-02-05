export function lengthOfLongestSubstring(s: string): number {
  const prevPosition: { [c: string]: number } = {};

  let max = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const currI = i + 1;
    const prevI = prevPosition[char] || 0;
    const diffI = currI - prevI;
    prevPosition[char] = currI;

    length++;
    length = length < diffI ? length : diffI;
    max = length > max ? length : max;
  }

  return max;
}
