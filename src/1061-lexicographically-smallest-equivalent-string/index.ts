export function smallestEquivalentString(
  s1: string,
  s2: string,
  baseStr: string
): string {
  const obj: number[] = [];
  for (let i = 0; i < 26; i++) {
    obj[i] = i;
  }

  function find(x: number): number {
    if (obj[x] == x) {
      return x;
    }

    obj[x] = find(obj[x]);

    return obj[x];
  }

  function union(x: number, y: number): void {
    x = find(x);
    y = find(y);
    if (x == y) {
      return;
    }
    if (x < y) {
      obj[y] = x;
    } else {
      obj[x] = y;
    }
  }

  const a = "a".charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    const code1 = s1.charCodeAt(i) - a;
    const code2 = s2.charCodeAt(i) - a;
    union(code1, code2);
  }

  let result = "";
  for (let i = 0; i < baseStr.length; i++) {
    const code = baseStr.charCodeAt(i);
    const char = find(code - a) + a;
    result += String.fromCharCode(char);
  }

  return result;
}
