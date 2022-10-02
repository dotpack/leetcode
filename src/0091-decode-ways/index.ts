function isDecodeAblePair(a: string, b: string): boolean {
  if (a === "0") {
    return false;
  }
  if (a === "1") {
    return true;
  }
  if (a === "2") {
    return b !== "7" && b !== "8" && b !== "9";
  }
  return false;
}

export function numDecodings(s: string): number {
  let count = s.length > 0 ? 1 : 0;
  let prevCount = count;
  let prevD = "0";
  for (const d of s) {
    const prevCountCopy = prevCount;
    prevCount = count;

    count = d !== "0" ? count : 0;
    if (isDecodeAblePair(prevD, d)) {
      count += prevCountCopy;
    }

    prevD = d;
  }
  return count;
}
