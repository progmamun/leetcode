class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodeMap = new Map<number, TreeNode>();
  const children = new Set<number>();

  for (const [parent, child, isLeft] of descriptions) {
    // parent node
    if (!nodeMap.has(parent)) {
      nodeMap.set(parent, new TreeNode(parent));
    }
    // child node
    if (!nodeMap.has(child)) {
      nodeMap.set(child, new TreeNode(child));
    }

    const parentNode = nodeMap.get(parent)!;
    const childNode = nodeMap.get(child)!;

    if (isLeft === 1) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    children.add(child);
  }
  for (const [val, node] of nodeMap) {
    if (!children.has(val)) {
      return node;
    }
  }
  return null;
}
