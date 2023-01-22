export function partition(s: string): string[][] {
  const result: string[][] = [];

  function isPolindrome(f: number, t: number): boolean {
    while (f < t) {
      if (s[f] !== s[t]) return false;
      f++;
      t--;
    }
    return true;
  }

  const collection: string[] = [];
  function run(f: number) {
    if (f === s.length) {
      result.push(collection.slice());
    }
    for (let i = f; i < s.length; i++) {
      if (isPolindrome(f, i)) {
        collection.push(s.substring(f, i + 1));
        run(i + 1);
        collection.pop();
      }
    }
  }
  run(0);

  return result;
}
