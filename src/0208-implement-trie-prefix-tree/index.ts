class TrieNode {
  public readonly chars: Record<string, TrieNode> = {};
  public isWord: boolean = false;
}

export class Trie {
  private readonly node = new TrieNode();

  constructor() {}

  insert(word: string): void {
    let node = this.node;
    for (const c of word) {
      if (!node.chars[c]) {
        node.chars[c] = new TrieNode();
      }
      node = node.chars[c];
    }
    node.isWord = true;
  }

  traverse(word: string): TrieNode | null {
    let node = this.node;
    for (const c of word) {
      if (!node.chars[c]) {
        return null;
      }
      node = node.chars[c];
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.traverse(word);
    return node?.isWord || false;
  }

  startsWith(prefix: string): boolean {
    const node = this.traverse(prefix);
    return Boolean(node);
  }
}
