import { findAllConcatenatedWordsInADict } from ".";

describe("0472-concatenated-words", () => {
  it.each([
    [
      [
        "cat",
        "cats",
        "catsdogcats",
        "dog",
        "dogcatsdog",
        "hippopotamuses",
        "rat",
        "ratcatdogcat",
      ],
      ["catsdogcats", "dogcatsdog", "ratcatdogcat"],
    ],
    [["cat", "dog", "catdog"], ["catdog"]],
    [["cat", "catcat"], ["catcat"]],
  ])("%o", (arr, res) => {
    res.sort();

    const result = findAllConcatenatedWordsInADict(arr);
    result.sort();
    expect(result).toEqual(res);
  });
});
