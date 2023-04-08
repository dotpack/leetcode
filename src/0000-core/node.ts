export class Node {
  val: number;
  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }

  static fromArray(neighbors: number[][]): Node | null {
    const nodes = neighbors.map((_, i) => new Node(i + 1));

    for (let i = 0; i < neighbors.length; i++) {
      const node = nodes[i];
      if (!node) {
        continue;
      }

      const links = neighbors[i];
      for (const link of links) {
        const toNode = nodes[link - 1];
        if (!toNode) {
          continue;
        }
        node.neighbors.push(toNode);
      }
    }
    return nodes[0] || null;
  }

  toArray(): number[][] {
    const visited = new Set<number>();
    visited.add(this.val);

    const result: number[][] = [];
    const queue: Node[] = [this];
    while (queue.length > 0) {
      const node = queue.shift()!;
      result[node.val - 1] = result[node.val - 1] || [];
      for (const neighbor of node.neighbors) {
        result[node.val - 1].push(neighbor.val);
        if (!visited.has(neighbor.val)) {
          visited.add(neighbor.val);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}
