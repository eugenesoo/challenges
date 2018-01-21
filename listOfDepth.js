class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail (node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Tree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(tree) {
    this.left = tree;
  }

  addRight(tree) {
    this.right = tree;
  }
}

const listOfDepth = function ( rootNode ) {
  const list = {};
  const nodeQueue = [ {
    depth: 0,
    node: rootNode,
  } ];

  const innerHelper = function (node, depth) {
    // dequeue from nodeQueue;
    const activeNodeObj = nodeQueue.shift();

    // do things to activeNode
    if (list[activeNodeObj.depth]) {
      // add activeNodeObj.node to linkedlist
      list[activeNodeObj.depth].addToTail(new Node(activeNodeObj.node.value));
    } else {
      // create new linkedlist under list[activeNodeObj.depth];
      list[activeNodeObj.depth] = new List();
      // add activeNodeObj.node to new linkedlist
      list[activeNodeObj.depth].addToTail(new Node(activeNodeObj.node.value));
    }

    // add children to queue
    if (node.left) {
      nodeQueue.push({
        depth: depth + 1,
        node: node.left,
      });
    }

    if (node.right) {
      nodeQueue.push({
        depth: depth + 1,
        node: node.right,
      });
    }
    
    // recurse on childNodes
    if (node.left) {
      innerHelper(node.left, depth + 1);
    }

    if (node.right) {
      innerHelper(node.right, depth + 1);
    }
  }

  innerHelper(rootNode, 0);

  return list;
}


const root = new Tree(1);
const child1 = new Tree(3);
const child2 = new Tree(4);
const child3 = new Tree(5);
const child4 = new Tree(6);
const child5 = new Tree(7);
const child6 = new Tree(8);
const child7 = new Tree(9);
root.addLeft(child1);
root.addRight(child2);
child1.addLeft(child3);
child1.addRight(child4);
child2.addLeft(child5);
child2.addRight(child6);
child3.addLeft(child7);

listOfDepth(root);
