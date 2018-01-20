const Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.addAllLeft = function (array, startingIndex) {
  if (startingIndex >= 0) {
    this.left = new Tree (array[startingIndex]);
    this.left.addAllLeft(array, startingIndex - 1);
  }
}

Tree.prototype.addAllRight = function (array, startingIndex) {
  if (startingIndex < array.length) {
    this.right = new Tree (array[startingIndex]);
    this.right.addAllRight(array, startingIndex + 1);
  }
}

const minimalTree = (array) => {
  // split array in the middle
  const arrayEnd = array.length - 1;
  const arrayMid = Math.floor(arrayEnd / 2);

  const tree = new Tree (array[arrayMid]);
  tree.addAllLeft(array, arrayMid - 1);
  tree.addAllRight(array, arrayMid + 1);

  return tree;
  // work with left nodes
}
