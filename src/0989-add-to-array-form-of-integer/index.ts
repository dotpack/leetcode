export function addToArrayForm(num: number[], k: number): number[] {
  const ans: number[] = [];
  let i = num.length - 1;
  let r = 0;
  while (k > 0 || i >= 0) {
    const mod = k % 10;
    k = Math.floor(k / 10);

    const val = r + mod + (num[i] || 0);
    const dec = val % 10;
    r = Math.floor(val / 10);
    ans.unshift(dec);

    i -= 1;
  }
  if (r) {
    ans.unshift(r);
  }
  return ans;
}
