export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  function doesIntervalsOverlap(a: number[], b: number[]) {
    return Math.min(a[1], b[1]) - Math.max(a[0], b[0]) >= 0;
  }

  function mergeIntervals(a: number[], b: number[]): number[] {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
  }

  function insertInterval(intervals: number[][], newInterval: number[]) {
    let isIntervalInserted = false;
    for (let i = 0; i < intervals.length; i++) {
      if (newInterval[0] < intervals[i][0]) {
        intervals.splice(i, 0, newInterval);
        isIntervalInserted = true;
        break;
      }
    }

    if (!isIntervalInserted) {
      intervals.push(newInterval);
    }
  }

  insertInterval(intervals, newInterval);

  const answer: number[][] = [];
  for (let i = 0; i < intervals.length; i++) {
    let currInterval = [intervals[i][0], intervals[i][1]];
    while (
      i < intervals.length &&
      doesIntervalsOverlap(currInterval, intervals[i])
    ) {
      currInterval = mergeIntervals(currInterval, intervals[i]);
      i++;
    }
    i--;
    answer.push(currInterval);
  }

  return answer;
}
