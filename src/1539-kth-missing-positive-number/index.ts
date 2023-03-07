export function findKthPositive(arr: number[], k: number): number {
  let num = 1;
  let arrPos = 0;
  while (k > 0) {
    if (arr[arrPos] === num) {
      arrPos++;
    } else if (k === 1) {
      return num;
    } else {
      k--;
    }
    num++;
  }
  return num;
}
