import { SummaryRanges } from ".";

describe("0352-data-stream-as-disjoint-intervals", () => {
  it.each([
    [
      [
        "SummaryRanges",
        "addNum",
        "getIntervals",
        "addNum",
        "getIntervals",
        "addNum",
        "getIntervals",
        "addNum",
        "getIntervals",
        "addNum",
        "getIntervals",
      ],
      [[], [1], [], [3], [], [7], [], [2], [], [6], []],
      [
        null,
        null,
        [[1, 1]],
        null,
        [
          [1, 1],
          [3, 3],
        ],
        null,
        [
          [1, 1],
          [3, 3],
          [7, 7],
        ],
        null,
        [
          [1, 3],
          [7, 7],
        ],
        null,
        [
          [1, 3],
          [6, 7],
        ],
      ],
    ],
  ])("returns correct result", (actions, inputs, result) => {
    const summaryRanges = new SummaryRanges();
    const acc: any[] = [null];
    for (let i = 1; i < actions.length; i++) {
      const action = actions[i] as keyof SummaryRanges;
      const input = inputs[i] as any;
      const res = summaryRanges[action](input[0]) || null;
      acc.push(res);
    }
    console.log(acc, result);
    expect(acc).toEqual(result);
  });
});
