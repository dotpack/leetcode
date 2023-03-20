export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const l = flowerbed.length - 1;

  for (let i = 0; i <= l; i++) {
    if (flowerbed[i] === 1) {
      i++;
    } else {
      const prev = i === 0 || flowerbed[i - 1] === 0;
      const next = i === l || flowerbed[i + 1] === 0;
      if (prev && next) {
        n--;
        i++;
      }
    }
    if (n < 1) {
      return true;
    }
  }

  return n < 1;
}
