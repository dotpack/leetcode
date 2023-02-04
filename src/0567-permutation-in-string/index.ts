export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const n = z - a + 1;

  const s1map: number[] = new Array(n).fill(0);
  const s2map: number[] = new Array(n).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const c1 = s1.charCodeAt(i) - a;
    s1map[c1]++;

    const c2 = s2.charCodeAt(i) - a;
    s2map[c2] = (s2map[c2] || 0) + 1;
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s1map[i] === s2map[i]) {
      count++;
    }
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (count === n) {
      return true;
    }

    const l = s2.charCodeAt(i) - a;
    const r = s2.charCodeAt(i + s1.length) - a;

    s2map[r]++;
    if (s2map[r] === s1map[r]) {
      count++;
    } else if (s2map[r] === s1map[r] + 1) {
      count--;
    }

    s2map[l]--;
    if (s2map[l] === s1map[l]) {
      count++;
    } else if (s2map[l] === s1map[l] - 1) {
      count--;
    }
  }

  return count === n;
}
