class WordDictionaryItem {
  public chars: Map<string, WordDictionaryItem> = new Map();
  public isWord: boolean = false;
}

export class WordDictionary {
  private readonly node: WordDictionaryItem = new WordDictionaryItem();

  constructor() {}

  addWord(word: string): void {
    let node = this.node;
    for (const w of word) {
      const oldNode = node.chars.get(w);
      if (oldNode) {
        node = oldNode;
      } else {
        const newNode = new WordDictionaryItem();
        node.chars.set(w, newNode);
        node = newNode;
      }
    }
    node.isWord = true;
  }

  search(word: string): boolean {
    const q = [this.node];
    for (const w of word) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const node = q.shift();
        if (!node) {
          continue;
        }
        if (w === ".") {
          for (const n of node.chars.values()) {
            q.push(n);
          }
        } else {
          const n = node.chars.get(w);
          if (n) {
            q.push(n);
          }
        }
      }
    }
    return q.some((node) => node.isWord);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
