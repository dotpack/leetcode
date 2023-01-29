class Node {
  public prev?: Node;
  public next?: Node;
  public count = 1;
  constructor(public key: number, public val: number) {}
}

class List {
  private head: Node;
  private tail: Node;
  public size: number;

  constructor() {
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.size = 0;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node: Node): Node {
    const prev = this.tail.prev;
    if (!prev) {
      throw new RangeError("can not add node, tail have no prev");
    }
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
    this.size += 1;
    return node;
  }

  remove(node: Node): void {
    const prev = node.prev;
    if (!prev) {
      throw new RangeError("can not remove node, node have no prev");
    }
    const next = node.next;
    if (!next) {
      throw new RangeError("can not remove node, node have no next");
    }
    prev.next = next;
    next.prev = prev;
    this.size -= 1;
  }

  pop(): Node | null {
    if (this.size === 0) {
      return null;
    }
    const node = this.head.next;
    if (!node) {
      throw new RangeError("can not pop node, head have no next");
    }
    this.remove(node);
    return node;
  }
}

export class LFUCache {
  private readonly cache = new Map<number, Node>();
  private readonly frequencies = new Map<number, List>();
  private readonly cap: number;
  private min: number;
  private now: number;

  constructor(capacity: number) {
    this.cap = capacity;
    this.min = 0;
    this.now = 0;
  }

  private update(node: Node) {
    const oldList = this.frequencies.get(node.count);
    if (!oldList) {
      throw new RangeError("can not update node, old list was not found");
    }

    oldList.remove(node);
    if (oldList.size === 0) {
      if (node.count === this.min) {
        this.min += 1;
      }
    }
    node.count += 1;

    const newList = this.frequencies.get(node.count) || new List();
    newList.add(node);

    this.frequencies.set(node.count, newList);
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if (!node) {
      return -1;
    }
    this.update(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.cap <= 0) {
      return;
    }

    const node = this.cache.get(key);
    if (node) {
      node.val = value;
      this.update(node);
      return;
    }

    if (this.now === this.cap) {
      const minList = this.frequencies.get(this.min);
      if (!minList) {
        throw new RangeError("can not put node, min list was not found");
      }

      const node = minList.pop();
      if (node) {
        this.cache.delete(node.key);
      }
    } else {
      this.now += 1;
    }
    this.min = 1;

    const newNode = new Node(key, value);
    this.cache.set(newNode.key, newNode);

    const newList = this.frequencies.get(newNode.count) || new List();
    newList.add(newNode);
    this.frequencies.set(newNode.count, newList);
    return;
  }
}
