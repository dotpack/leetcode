export function addBinary(a: string, b: string): string {
  let an = a.length - 1;
  let bn = b.length - 1;

  let ans = "";
  let rest = 0;

  while (an >= 0 || bn >= 0) {
    const av = an < 0 ? 0 : a[an] === "1" ? 1 : 0;
    const bv = bn < 0 ? 0 : b[bn] === "1" ? 1 : 0;

    const res = av + bv + rest;

    if (res === 0) {
      ans = "0" + ans;
      rest = 0;
    } else if (res === 1) {
      ans = "1" + ans;
      rest = 0;
    } else if (res === 2) {
      ans = "0" + ans;
      rest = 1;
    } else {
      ans = "1" + ans;
      rest = 1;
    }

    an--;
    bn--;
  }

  if (rest) {
    ans = "1" + ans;
  }
  return ans;
}
