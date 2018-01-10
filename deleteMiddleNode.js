const deleteMiddleNode = (node) => {
  // find next node
  let nextNode = node.next;
  // check if nextNode is tail, if it is, return null
  if (!nextNode) {
    return null;
  }
  // copy next node to current node
  node.value = nextNode.value;
  node.next = nextNode.next;
}
