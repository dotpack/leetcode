export class SummaryRanges {
  private readonly arr: [number, number][] = [];

  constructor() {}

  addNum(value: number): void {
    let valIsInside = false;
    for (let i = 0; i < this.arr.length; i++) {
      const [x, y] = this.arr[i];
      if (value >= x && value <= y) {
        valIsInside = true;
        break;
      } else if (value === y + 1) {
        this.arr[i] = [this.arr[i][0], value];
        if (value + 1 === this.arr[i + 1]?.[0]) {
          this.arr[i] = [this.arr[i][0], this.arr[i + 1][1]];
          this.arr.splice(i + 1, 1);
        }
        valIsInside = true;
        break;
      } else if (value < x) {
        if (value + 1 == x) {
          this.arr[i] = [value, this.arr[i][1]];
        } else {
          this.arr.splice(i, 0, [value, value]);
        }
        valIsInside = true;
        break;
      }
    }
    if (!valIsInside) {
      this.arr.push([value, value]);
    }
  }

  getIntervals(): number[][] {
    return this.arr.slice();
  }
}
