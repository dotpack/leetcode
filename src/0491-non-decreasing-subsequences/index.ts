class Sequence {
  constructor(private readonly arr: number[] = []) {}

  getKey(): string {
    return this.arr.join(":");
  }

  getVal(): number[] {
    return this.arr.map((v) => v);
  }

  size(): number {
    return this.arr.length;
  }

  isLte(val: number): boolean {
    return !this.arr.length || this.arr[this.arr.length - 1] <= val;
  }

  push(val: number): void {
    this.arr.push(val);
  }

  pop(): void {
    this.arr.pop();
  }
}

export function findSubsequences(nums: number[]): number[][] {
  const result = new Map<string, number[]>();
  const sequence = new Sequence();

  function run(index: number) {
    if (index === nums.length) {
      if (sequence.size() >= 2) {
        result.set(sequence.getKey(), sequence.getVal());
      }
      return;
    }

    if (sequence.isLte(nums[index])) {
      sequence.push(nums[index]);
      run(index + 1);
      sequence.pop();
    }
    run(index + 1);
  }

  run(0);
  return [...result.values()];
}
