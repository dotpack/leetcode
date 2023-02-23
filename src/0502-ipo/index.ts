export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  class Heap<T> {
    private readonly arr: T[] = [];

    push(newKey: T) {
      this.arr.push(newKey);

      let curr = this.arr.length - 1;

      while (curr > 0) {
        let parent = Math.floor((curr - 1) / 2);
        if (this.arr[curr] < this.arr[parent]) {
          [this.arr[curr], this.arr[parent]] = [
            this.arr[parent],
            this.arr[curr],
          ];
          curr = parent;
        } else {
          break;
        }
      }
    }

    pop(): T | undefined {
      const n = this.arr.length;
      [this.arr[0], this.arr[n - 1]] = [this.arr[n - 1], this.arr[0]];

      const removedKey = this.arr.pop();

      let curr = 0;

      while (2 * curr + 1 < this.arr.length) {
        const leftIndex = 2 * curr + 1;
        const rightIndex = 2 * curr + 2;
        const minChildIndex =
          rightIndex < this.arr.length &&
          this.arr[rightIndex] < this.arr[leftIndex]
            ? rightIndex
            : leftIndex;
        if (this.arr[minChildIndex] < this.arr[curr]) {
          [this.arr[minChildIndex], this.arr[curr]] = [
            this.arr[curr],
            this.arr[minChildIndex],
          ];
          curr = minChildIndex;
        } else {
          break;
        }
      }

      return removedKey;
    }

    size(): number {
      return this.arr.length;
    }
  }

  const n = profits.length;
  const projects: { capital: number; profit: number }[] = new Array(n)
    .fill(0)
    .map((_, i) => ({ capital: capital[i], profit: profits[i] }));
  projects.sort((a, b) => a.capital - b.capital);

  const q = new Heap();
  let ptr = 0;
  for (let i = 0; i < k; i++) {
    while (ptr < n && projects[ptr].capital <= w) {
      q.push(-projects[ptr++].profit);
    }
    if (!q.size()) {
      break;
    }
    w += -(q.pop() || 0);
  }
  return w;
}
