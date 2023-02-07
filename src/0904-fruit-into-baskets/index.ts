export function totalFruit(fruits: number[]): number {
  let b1 = -1;
  let b2 = -1;
  let c1 = 0;
  let c2 = 0;
  let max = 0;

  let seq = 0;
  let prev = -1;
  for (const fruit of fruits) {
    if (fruit === b1) {
      c1++;
    } else if (fruit === b2) {
      c2++;
    } else {
      max = Math.max(max, c1 + c2);
      b1 = fruit;
      c1 = 1;
      b2 = prev;
      c2 = seq;
    }
    if (fruit !== prev) {
      prev = fruit;
      seq = 1;
    } else {
      seq++;
    }
  }
  return Math.max(max, c1 + c2);
}
