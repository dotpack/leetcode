import { Trie } from ".";

describe("0208-implement-trie-prefix-tree", () => {
  it.each([
    [
      ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
      [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
      [null, null, true, false, true, null, true],
    ],
  ])("works fine", (methods, params, results) => {
    const trie = new Trie();
    for (let i = 1; i < methods.length; i++) {
      const method = methods[i] as keyof Trie;
      const [str] = params[i] as [string];
      const res = results[i] === null ? undefined : results[i];
      expect(trie[method](str)).toEqual(res);
    }
  });
});
