import { WordDictionary } from ".";

describe("0211-design-add-and-search-words-data-structure", () => {
  it.each([
    [
      [
        "WordDictionary",
        "addWord",
        "addWord",
        "addWord",
        "search",
        "search",
        "search",
        "search",
      ],
      [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]],
      [null, null, null, null, false, true, true, true],
    ],
    [
      [
        "WordDictionary",
        "addWord",
        "addWord",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
      ],
      [
        [],
        ["a"],
        ["ab"],
        ["a"],
        ["a."],
        ["ab"],
        [".a"],
        [".b"],
        ["ab."],
        ["."],
        [".."],
      ],
      [null, null, null, true, true, true, false, true, false, true, true],
    ],
  ])("works fine", (methods, params, results) => {
    const wordDictionary = new WordDictionary();
    for (let i = 1; i < methods.length; i++) {
      const method = methods[i] as keyof WordDictionary;
      const [str] = params[i] as [string];
      const res = results[i] === null ? undefined : results[i];
      expect(wordDictionary[method](str)).toEqual(res);
    }
  });
});
