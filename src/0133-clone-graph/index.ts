import { Node } from "../0000-core/node";

export function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const map = new Map<Node, Node>();
  const dfs = (node: Node) => {
    if (map.has(node)) {
      return map.get(node);
    }

    const cloneNode = new Node(node.val);
    map.set(node, cloneNode);
    for (const n of node.neighbors) {
      const neighbor = dfs(n) || null;
      if (!neighbor) {
        continue;
      }
      cloneNode.neighbors.push(neighbor);
    }
    return cloneNode;
  };

  return dfs(node) || null;
}
