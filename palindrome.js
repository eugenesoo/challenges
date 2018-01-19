const isPalindrome = (list) => {
  const listObj = {};
  const listSize = 0;
  let currentNode = list.head;
  while (currentNode) {
    listObj[listSize] = currentNode.value;
    listSize += 1;
    currentNode = currentNode.next;
  }
  // loop through list and put everything in an object
  // keep count of size of list
  //
  const firstIndex = 0;
  const lastIndex = listSize;

  while (firstIndex < lastIndex) {
    if (listObj[firstIndex] === listObj[lastIndex]) {

    } else {
      return false;
    }
    firstIndex += 1;
    lastIndex -= 1;
    // check if listObj[firstIndex] === listObj[lastIndex]
    // if true, continue,
    // if false, return false
  }
  return true;
}

const isPalindromeAct = (list) => {
  const slowIndex = list.head;
  const fastIndex = list.head;
  const listArray = [];
  let nodeToCheck;
  // copies first half of list into array
  while (fastIndex) {
    if (fastIndex.next) {
      listArray.push(slowIndex);
      fastIndex = fastIndex.next.next;
    } else {
      fastIndex = null;
    }
    slowIndex = slowIndex.next;
  }

  // checks first half of list with 2nd half of list
  while (slowIndex) {
    // get top most element of array;
    nodeToCheck = listArray.pop();
    // check if element = slowIndex;
    if (nodeToCheck.value !== slowIndex.value) {
      return false;
    }
    slowIndex = slowIndex.next;
  }
  return true;
}

const List = function () {
  this.head = null;
  this.tail = null;
}

List.prototype.addToTail = function (node) {
  if (this.head) {
    this.head = node;
    this.tail = node;
  } else {
    const temp = this.tail;
    this.tail = node;
    temp.next = this.tail;
  }
}

const Node = function (value) {
  this.value = value;
  this.next = null;
}

const testList = new List();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(1);

testList.addToTail(node1);
testList.addToTail(node2);
testList.addToTail(node3);
testList.addToTail(node4);
testList.addToTail(node5);

isPalindromeAct(testList);
