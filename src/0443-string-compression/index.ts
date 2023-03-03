export function compress(chars: string[]): number {
  let pos = 0;

  function fill(from: number, n: number): void {
    const s = `${n}`;
    for (let i = 0; i < s.length; i++) {
      chars[from + i] = s[i];
      pos = pos + 1;
    }
  }

  let nums = 0;
  let prev = "";
  for (let i = 0; i < chars.length; i++) {
    if (prev === chars[i]) {
      nums = nums + 1;
    } else {
      chars[pos - 1] = prev;
      if (nums > 1) {
        fill(pos, nums);
      }
      prev = chars[i];
      nums = 1;
      pos++;
    }
  }
  chars[pos - 1] = prev;
  if (nums > 1) {
    fill(pos, nums);
  }

  return pos;
}
