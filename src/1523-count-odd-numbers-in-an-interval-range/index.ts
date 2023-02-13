export function countOdds(low: number, high: number): number {
  let count = Math.floor((high - low) / 2);
  if (low === high) {
    count += high % 2 === 1 ? 1 : 0;
  } else if (high % 2 === 1) {
    count += 1;
  } else if (low % 2 === 1) {
    count += 1;
  }
  return count;
}
