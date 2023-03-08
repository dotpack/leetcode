export function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = piles.reduce((max, p) => Math.max(max, p), 0);

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    let total = 0;
    for (const p of piles) {
      total += Math.floor((p + m - 1) / m);
    }

    if (total > h) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}
