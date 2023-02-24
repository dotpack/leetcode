export function minimumDeviation(nums: number[]): number {
  function heapPush<T>(arr: T[], newKey: T) {
    arr.push(newKey);

    let curr = arr.length - 1;

    while (curr > 0) {
      let parent = Math.floor((curr - 1) / 2);
      if (arr[curr] < arr[parent]) {
        [arr[curr], arr[parent]] = [arr[parent], arr[curr]];
        curr = parent;
      } else {
        break;
      }
    }
  }

  function heapPop<T>(arr: T[]): T | undefined {
    const n = arr.length;
    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];

    const removedKey = arr.pop();

    let curr = 0;

    while (2 * curr + 1 < arr.length) {
      const leftIndex = 2 * curr + 1;
      const rightIndex = 2 * curr + 2;
      const minChildIndex =
        rightIndex < arr.length && arr[rightIndex] < arr[leftIndex]
          ? rightIndex
          : leftIndex;
      if (arr[minChildIndex] < arr[curr]) {
        [arr[minChildIndex], arr[curr]] = [arr[curr], arr[minChildIndex]];
        curr = minChildIndex;
      } else {
        break;
      }
    }

    return removedKey;
  }

  const pq: number[] = [];

  let res = +Infinity;
  let min = +Infinity;
  for (const num of nums) {
    const cur = num % 2 == 0 ? num : num * 2;
    heapPush(pq, -cur);
    min = Math.min(min, cur);
  }

  while (pq[0] % 2 === 0) {
    res = Math.min(res, -pq[0] - min);
    min = Math.min(min, -pq[0] / 2);
    heapPush(pq, pq[0] / 2);
    heapPop(pq);
  }

  return Math.min(res, -pq[0] - min);
}
