const isSmaller = (box1, box2) => box2[0] <= box1[0] && box2[1] <= box1[1] && box2[2] <= box1[2];

const boxStack = (boxArray) => {
  let maxHeight = 0;
  let maxStack;
  const stackBoxes = (currentStack = [], currentBoxIndex = 0) => {
    // if i + 1 is more than the length of boxArray,
    // calculate height of currentStack
    // if height is more than maxHeight, replace maxHeight and maxStack
    //
    for (let i = currentBoxIndex; i < boxArray.length; i += 1) {
      const newStack = currentStack.slice();
      if (newStack.length === 0) {
        newStack.push(boxArray[i]);
        stackBoxes(newStack, i + 1);
      } else if (isSmaller(newStack[newStack.length - 1], boxArray[i])) {
        newStack.push(boxArray[i]);
        stackBoxes(newStack, i + 1);
      }
    }

    if (currentBoxIndex === boxArray.length - 1) {
      let height = 0;
      for (let i = 0; i < currentStack.length; i += 1) {
        height += currentStack[i][0];
      }

      if (height > maxHeight) {
        maxHeight = height;
        maxStack = currentStack;
      }
    }
    // iterate through boxArray
    // create copy of currentStack
    // if newStack is empty, add boxArray[i] to stack,
    // if not empty, check if boxArray[i] is smaller than newStack[newStack.length - 1]
    // if it is, push boxArray[i] into newStack,
    // recurse stackBoxes(newStack, i + 1);
  }

  stackBoxes();

  return maxStack;
}
