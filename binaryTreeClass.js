class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node) {
    if (node.value < this.value) {
      if (this.left) {
        this.left.insert(node);
      } else {
        this.left = node;
      }
    } else {
      if (this.right) {
        this.right.insert(node);
      } else {
        this.right = node;
      }
    }
  }

  find(node) {
    // base case
    if (this === node) {
      return true;
    }

    if (node.value < this.value) {
      if (this.left.find(node)) {
        return true;
      }
    } else {
      if (this.right.find(node)) {
        return true;
      }
    }

    return false;
  }

  findParent(node) {
    if (node.value < this.value) {
      if (node === this.left) {
        return this;
      } else {
        if (this.left) {
          return this.left.findParent(node);
        }
      }
    } else {
      if (node === this.right) {
        return this;
      } else {
        if (this.right) {
          return this.right.findParent(node);
        }
      }
    }
    return false;
  }

  delete(node) {
    const _findLeftNodeOfRightMostSubTree = (currentNode) => {
      if (node.right) {
        const leftNode =  _findLeftNodeOfRightMostSubTree(node.right);
        if (leftNode) {
          return leftNode;
        }
      }

      if (node.left) {
        return node.left;
      }
    }
    
    const nodeParent = this.findParent(node);
    if (!nodeParent) {
      return false;
    }
    // check if node has children
    if (!node.left && !node.right) {
      if (node.value < nodeParent.value) {
        nodeParent.left = null;
      } else if (node.value > nodeParent.value) {
        nodeParent.right = null;
      }
    } else if (node.left && !node.right) {
      if (node.value < nodeParent.value) {
        nodeParent.left = node.left;
      } else if (node.value > nodeParent.value) {
        nodeParent.right = node.right;
      }
    } else if (node.left && node.right) {
      const leftMostNode = _findLeftNodeOfRightMostSubTree(this);
      node.value = leftMostNode.value;
      this.delete(leftMostNode);
    }
    // if no children, find parent, and change link to null
    // if 1 child, find parent, change link to the child node
    // if 2 child, find parent, find left most node of most right subtree, replace node value with the value,
      // delete left most node of most right subtree
  }
}
