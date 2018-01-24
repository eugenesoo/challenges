Tree.prototype.getAncestorPath = (node, ancestryPath = []) => {
  if (this === node) {
    return ancestryPath;
  };

  ancestryPath.push(this);

  for (let i = 0; i < this.children.length; i += 1) {
    const isValidAncestryPath = this.children[i].getAncestorPath(node, ancestryPath.slice());
    if (isValidAncestryPath) {
      return isValidAncestryPath;
    }
  }

  return null;
}

Tree.prototype.getCommonAncestor = (node1, node2) => {
  const node1AncestryPath = this.getAncestorPath(node1);
  const node2AncestryPath = this.getAncestorPath(node2);

  if (!node1AncestryPath || !node2AncestryPath) {
    return null;
  }

  for (let i = 0; i < node1AncestryPath.length; i += 1) {
    if (node1AncestryPath[i] !== node2AncestryPath[i]) {
      return node1AncestryPath[i - 1];
    }
  }

  return node1;
}
