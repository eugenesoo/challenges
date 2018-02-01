const checkBalanced = (rootNode) => {
  let leftTreeHeight = 0;
  let rightTreeHeight = 0;

  const innerHelper = (node, depth) => {
    // base case when child is 0
    if (!node.left || !node.right) {
      return depth;
    }

    if (node.left) {
      const leftTreeHeight = checkBalanced(node.left, depth + 1);
    }

    if (node.right) {
      const rightTreeHeight = checkBalanced(node.right, depth + 1);
    }
  }
}
