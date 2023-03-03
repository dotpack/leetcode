export function strStr(haystack: string, needle: string): number {
  let pos = -1;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let flag = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return pos;
}
