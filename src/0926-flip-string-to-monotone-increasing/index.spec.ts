import { minFlipsMonoIncr } from ".";

describe("0926-flip-string-to-monotone-increasing", () => {
  it.each([
    ["00110", 1],
    ["010110", 2],
    ["00011000", 2],
  ])("%s -> %d", (s, result) => {
    expect(minFlipsMonoIncr(s)).toEqual(result);
  });
});
