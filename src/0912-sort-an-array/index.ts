export function sortArray(nums: number[]): number[] {
  function merge(f1: number, t1: number, f2: number, t2: number): void {
    if (f1 === t2) {
      return;
    }

    let lo = f1;
    let hi = t2;

    const temp = [];
    let index = 0;
    while (f1 <= t1 && f2 <= t2) {
      if (nums[f1] < nums[f2]) {
        temp[index] = nums[f1];
        f1++;
      } else {
        temp[index] = nums[f2];
        f2++;
      }
      index++;
    }

    while (f1 <= t1) {
      temp[index] = nums[f1];
      index++;
      f1++;
    }
    while (f2 <= t2) {
      temp[index] = nums[f2];
      index++;
      f2++;
    }

    index = 0;
    while (lo <= hi) {
      nums[lo] = temp[index];
      index++;
      lo++;
    }
  }

  function mergeSort(f: number, t: number): void {
    if (f >= t) {
      return;
    }
    const mid = Math.floor((f + t) / 2);
    mergeSort(f, mid);
    mergeSort(mid + 1, t);
    merge(f, mid, mid + 1, t);
  }

  mergeSort(0, nums.length - 1);
  return nums;
}
