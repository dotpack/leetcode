export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];

  if (p.length > s.length) {
    return result;
  }

  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const n = z - a + 1;

  const pMap = new Array(n).fill(0);
  const sMap = new Array(n).fill(0);
  for (let i = 0; i < p.length; i++) {
    const pChar = p.charCodeAt(i) - a;
    pMap[pChar]++;

    const sChar = s.charCodeAt(i) - a;
    sMap[sChar]++;
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (pMap[i] === sMap[i]) {
      count++;
    }
  }

  for (let i = 0; i < s.length - p.length; i++) {
    if (count === n) {
      result.push(i);
    }

    const l = s.charCodeAt(i) - a;
    const r = s.charCodeAt(p.length + i) - a;

    sMap[l]--;
    if (sMap[l] === pMap[l]) {
      count++;
    } else if (sMap[l] === pMap[l] - 1) {
      count--;
    }

    sMap[r]++;
    if (sMap[r] === pMap[r]) {
      count++;
    } else if (sMap[r] === pMap[r] + 1) {
      count--;
    }
  }

  if (count === n) {
    result.push(s.length - p.length);
  }

  return result;
}
