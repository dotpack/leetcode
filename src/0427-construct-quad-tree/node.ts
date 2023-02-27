import { QuadTree } from "../0000-core/quad-tree";

type Bool = 1 | 0;

export class Node extends QuadTree<boolean, Bool, Bool> {
  serializeIsLeaf(): Bool {
    return this.isLeaf ? 1 : 0;
  }
  serializeValue(): Bool {
    return this.val ? 1 : 0;
  }
}
