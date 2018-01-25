const checkSubTree = (tree1, tree2) => {
  if (tree1 === tree2) {
    return true;
  }

  else if (tree1.children.length !== 0) {
    for (let i = 0; i < tree1.children.length; i += 1) {
      if (checkSubTree(tree1.children[i], tree2)) {
        return matchCtree(tree1.children[i], tree2);
      }
    }
  }

  return false;
}

const matchCtree = (node1, node2) => {
  if (node1 !== node2 || node1.children.length !== node2.children.length) {
    return false;
  }

  else if (node1.children.length !== 0) {
    for (let i = 0; i < node1.children.length; i += 1) {
      if (!matchCtree(node1.children[i], node2.children[i])) {
        return false;
      }
    }
  }

  return true;
}

const Tree = function (value) {
  this.value = value;
  this.children = [];
}

const root = new Tree(1);
const child1 = new Tree(2);
const child2 = new Tree(3);
const child3 = new Tree(4);
const child4 = new Tree(5);
const child5 = new Tree(6);
const child6 = new Tree(7);
const child7 = new Tree(8);
const child8 = new Tree(9);
root.children.push(child1);
root.children.push(child2);
root.children.push(child3);
child1.children.push(child4);
child1.children.push(child5);
child4.children.push(child6);
child4.children.push(child7);

checkSubTree(root, child4)

