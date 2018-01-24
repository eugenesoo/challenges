const successor = function (node) {
  const bstArray = [];
  const nodePosition = 0;
  const inOrderTraversal = function (currentNode) {
    inOrderTraversal(currentNode.left);
    
    if (!currentNode) {
      bstArray.push(currentNode);
      if (currentNode === node) {
        nodePosition = bstArray.length - 1;
      }
    }

    inOrderTraversal(currentNode.right);
  }

  inOrderTraversal(node);

  return bstArray[nodePosition + 1];
}

