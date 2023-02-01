export function gcdOfStrings(str1: string, str2: string): string {
  function gcd(l1: number, l2: number): number {
    if (l2 === 0) {
      return l1;
    } else {
      return gcd(l2, l1 % l2);
    }
  }
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const n = gcd(str1.length, str2.length);
  return str1.substring(0, n);
}
