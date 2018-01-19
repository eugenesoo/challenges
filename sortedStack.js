class SortedStack {
  constructor() {
    this.stack = [];
    this.tempStack = [];
  }

  push(value) {
    // check if stack is empty, if empty, put it in stack
    // if stack is not empty, check if value < stack[stack.length - 1];
      // if it is, put it in stack;
    // if it is not, while value > stack[stack.length - 1],
    // pop stack[stack.length - 1] and push it in tempStack;
    // push value in stack
    // while tempStack.length > 0; pop from tempStack and push it into stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

}
