class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(node) {
    if (this.value > node.value) {
      if (this.left) {
        this.left.addNode(node);
      } else {
        this.left = node;
      }
    } else {
      if (this.right) {
        this.right.addNode(node);
      } else {
        this.right = node;
      }
    }
  }

  getNodeCount() {
    let sum = 0;
    if (this.left) {
      sum += this.left.getNodeCount();
    }

    sum += 1;

    if (this.right) {
      sum += this.right.getNodeCount();
    }

    return sum;
  }
}

class Stream {
  constructor() {
    this.rootNode = undefined;
  }

  track(value) {
    const node = new BinaryTree(value);
    if (!this.rootNode) {
      this.rootNode = node;
    } else {
      this.rootNode.add(node);
    }
  }
  
  getRankOfNumber(value, node = this.rootNode) {
    if (value === node.value) {
      return node.getNodeCount() - 1;
    } else if (value < node.value) {
      return this.getRankOfNumber(value, node.left);
    } else {
      return 1 + node.left.getNodeCount() + this.getRankOfNumber(value, node.right);
    }
  }
}
