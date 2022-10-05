export class TreeNode<T = number> {
  public val: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(
    val: T,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  static fromArray<T>(arr: (T | null)[]): TreeNode<T> | null {
    if (!arr.length) {
      return null;
    }

    if (arr[0] === null) {
      throw new RangeError(`wrong root`);
    }
    const root = new TreeNode(arr[0]);

    const queue = [root];
    for (let i = 1; i < arr.length; i += 2) {
      const parent = queue.shift();
      if (!parent) {
        break;
      }

      const left = arr[i];
      if (left !== null) {
        const node = new TreeNode(left);
        parent.left = node;
        queue.push(node);
      }

      if (i + 1 < arr.length) {
        const right = arr[i + 1];
        if (right !== null) {
          const node = new TreeNode(right);
          parent.right = node;
          queue.push(node);
        }
      }
    }

    return root;
  }

  toArray(): (T | null)[] {
    const result = [];

    const queue: (TreeNode<T> | null)[] = [this];
    while (queue.length) {
      const node = queue.shift();
      if (!node) {
        result.push(null);
        continue;
      }
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }

    for (let i = result.length - 1; i >= 0; i--) {
      if (result[i] !== null) {
        break;
      }
      result.pop();
    }

    return result;
  }
}
