export abstract class QuadTree<T, TLeafSerialize, TValueSerialize> {
  public val: T;
  public isLeaf: boolean;
  public topLeft: QuadTree<T, TLeafSerialize, TValueSerialize> | null;
  public topRight: QuadTree<T, TLeafSerialize, TValueSerialize> | null;
  public bottomLeft: QuadTree<T, TLeafSerialize, TValueSerialize> | null;
  public bottomRight: QuadTree<T, TLeafSerialize, TValueSerialize> | null;

  constructor(
    val: T,
    isLeaf?: boolean,
    topLeft?: QuadTree<T, TLeafSerialize, TValueSerialize>,
    topRight?: QuadTree<T, TLeafSerialize, TValueSerialize>,
    bottomLeft?: QuadTree<T, TLeafSerialize, TValueSerialize>,
    bottomRight?: QuadTree<T, TLeafSerialize, TValueSerialize>
  ) {
    this.val = val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }

  abstract serializeIsLeaf(): TLeafSerialize;

  abstract serializeValue(): TValueSerialize;

  toArray(): ([TLeafSerialize, TValueSerialize] | null)[] {
    const res: ([TLeafSerialize, TValueSerialize] | null)[] = [];
    const stack: (QuadTree<T, TLeafSerialize, TValueSerialize> | null)[] = [
      this,
    ];
    while (stack.length) {
      const node = stack.shift();
      if (node) {
        res.push([node.serializeIsLeaf(), node.serializeValue()]);
        stack.push(node.topLeft);
        stack.push(node.topRight);
        stack.push(node.bottomLeft);
        stack.push(node.bottomRight);
      } else {
        res.push(null);
      }
    }
    let i = res.length - 1;
    while (i >= 0) {
      if (res[i] === null) {
        i--;
      } else {
        break;
      }
    }
    res.splice(i + 1);
    return res;
  }
}
