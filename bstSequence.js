const bstSequence = (rootNode) => {
  let result = [[]];

  const depthFirstTraversal = (node, parentNode) => {
    const newResult = [];

    for (let i = 0; i < result.length; i += 1 ) {
      // with array reference
      // check index of parentNode
      let parentIndex = 0;
      if (parentNode) {
         parentIndex = result[i].indexOf(parentNode);
      }
      if (result[i].length === 0) {
        const newArray = result[i].slice();
        // splice node into array copy
        newArray.splice(1, 0, node);
        // push array copy into newResult
        newResult.push(newArray);
      }
      for (let j = parentIndex; j < result[i].length; j += 1) {
        // create array copy
        const newArray = result[i].slice();
        // splice node into array copy
        newArray.splice(j + 1, 0, node);
        // push array copy into newResult
        newResult.push(newArray);
      }
    }
    // update result
    result = newResult;
    // recursive cases
    if (node.left) {
      depthFirstTraversal(node.left, node);
    }
    if (node.right) {
      depthFirstTraversal(node.right, node);
    }

  }

  depthFirstTraversal(rootNode);

  return result;
}

const Node = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const root = new Node(5);
const child1 = new Node(3);
const child2 = new Node(7);
const child3 = new Node(1);
const child4 = new Node(4);
const child5 = new Node(6);
const child6 = new Node(8);

root.left = child1;
root.right = child2;
child1.left = child3;
child1.right = child4;
child2.left = child5;
child2.right = child6;
bstSequence(root);
