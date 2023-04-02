export function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions.sort((a, b) => a - b);

  const res = [];
  for (const s of spells) {
    const rel = success / s;
    let f = 0;
    let t = potions.length - 1;
    while (f <= t) {
      const mid = Math.floor((f + t) / 2);
      if (potions[mid] < rel) {
        f = mid + 1;
      } else {
        t = mid - 1;
      }
    }
    res.push(potions.length - f);
  }

  return res;
}
