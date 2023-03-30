export function isScramble(s1: string, s2: string): boolean {
  const memo = new Map<string, boolean>();

  function check(str: string, i: number): boolean {
    if (str.length === 1) {
      return s2[i] === str;
    }

    const key = `${str}/${i}`;
    if (memo.has(key)) {
      return memo.get(key) || false;
    }

    let result = false;
    for (let j = 1; j < str.length; j++) {
      const left = str.slice(0, j);
      const right = str.slice(j);

      const leftRight = check(left, i) && check(right, i + left.length);
      if (leftRight) {
        result = true;
        break;
      }

      const rightLeft = check(right, i) && check(left, i + right.length);
      if (rightLeft) {
        result = true;
        break;
      }
    }

    memo.set(key, result);
    return result;
  }

  return check(s1, 0);
}
