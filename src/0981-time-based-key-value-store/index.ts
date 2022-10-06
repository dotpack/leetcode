export class TimeMap {
  private readonly map: Record<string, [string, number][]> = {};

  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    this.map[key] = this.map[key] || [];
    this.map[key].push([value, timestamp]);
  }

  get(key: string, timestamp: number): string {
    const arr = this.map[key];
    if (!arr) {
      return "";
    }

    if (timestamp < arr[0][1]) {
      return "";
    }

    let l = 0;
    let r = arr.length;
    while (l < r) {
      const m = Math.floor((r + l) / 2);
      const [_, t] = arr[m];
      if (t <= timestamp) {
        l = m + 1;
      } else if (t > timestamp) {
        r = m;
      }
    }
    return arr[r - 1][0];
  }
}
