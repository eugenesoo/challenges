const Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.addRight = function (node) {
  this.right = node;
}

Tree.prototype.addLeft = function (node) {
  this.left = node;
}

Tree.prototype.checkRouteDFS = function (node) {
  if (this === node) {
    return true;
  }
  if (this.left) {
    if (this.left.checkRouteDFS(node)) {
      return true;
    }
  }
  if (this.right) {
    if (this.right.checkRouteDFS(node)) {
      return true;
    }
  }
  return false;
}

Tree.prototype.checkRouteBFS = function (node) {
  const queue = [this];

  const innerHelper = function (currentNode, node) {
    //dequeue queue and check if node = what was dequeued
    if (queue.shift() === node) {
      return true;
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    //add left and right to queue
    if (currentNode.left && innerHelper(currentNode.left, node)) {
      return true;
    }

    if (currentNode.right && innerHelper(currentNode.right, node)) {
      return true;
    }
    return false;
    //run function on left
    //run function on right
  }

  return innerHelper(this, node);
}

const root = new Tree(1);
const child1 = new Tree(2);
const child2 = new Tree(3);
const child3 = new Tree(4);
const child4 = new Tree(5);
const child5 = new Tree(6);
const child6 = new Tree(7);
root.addRight(child1);
root.addLeft(child2);
child1.addRight(child3);
child1.addLeft(child4);
child2.addRight(child5);

root.checkRouteDFS(child6);
