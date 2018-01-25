const pathWithSums = (rootNode, sum) => {
  let numOfPaths = 0;
  
  const depthFirstTraversal = (node, currentSum = 0) => {
    currentSum += node.value;
    if (currentSum === sum) {
      numOfPaths += 1;
    }
    if (currentSum < sum) {
      if (node.children.length !== 0) {
        for (let i = 0; i < node.children.length; i += 1) {
          depthFirstTraversal(node.children[i], currentSum);
        }
      }
    }
    //
  }
  
  depthFirstTraversal(rootNode);

  return numOfPaths;
}

const child5 = {
  value: 3,
  children: [],
}

const child6 = {
  value: 1,
  children: [],
}

const child7 = {
  value: 6,
  children: [],
}

const child8 = {
  value: 1,
  children: [],
}

const child9 = {
  value: 5,
  children: [],
}

const child10 = {
  value: 3,
  children: [],
}

const child11 = {
  value: 2,
  children: [],
}

const child12 = {
  value: 5,
  children: [],
}

const child1 = {
  value: 1,
  children: [child5, child6],
}

const child2 = {
  value: 3,
  children: [child7, child8],
}

const child3 = {
  value: 2,
  children: [child9, child10],
}

const child4 = {
  value: 5,
  children: [child11, child12],
}

const root = {
  value: 0,
  children: [child1, child2, child3, child4],
}

pathWithSums(root, 4);
