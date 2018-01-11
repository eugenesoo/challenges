class List {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  addToHead (node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.head;
      this.head = node;
      node.next = temp;
    }
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

const sumList = (list1, list2) => {
  // reference to check if value of previous addition was > 10
  let largerThanTen = 0;
  // pointer for current list1 and 2 nodes
  let list1CurrentNode = list1.head;
  let list2CurrentNode = list2.head;
  // new list
  let resultList = new List();
  // variable to store sum of nodes from list1 and list2
  let currentSum;
  let nodeToAdd;
  // loop through list
  while (list1CurrentNode) {
    // add list1CurrentNode value to list2CurrentNode value
    currentSum = list1CurrentNode.value + list2CurrentNode.value + largerThanTen;
    // if currentSum > 0, 
    if (currentSum > 10) {
      nodeToAdd = new Node(currentSum - 10);
      largerThanTen = 1;
    } else {
      nodeToAdd = new Node(currentSum);
      largerThanTen = 0;
    }
      resultList.addToHead(nodeToAdd);
    // largerThanTen = currentSum - 10;
    // add 9 to tail of resultList;
    // else
    // add currentSum to tail of resultList
    // largerThanTen = 0;
    list1CurrentNode = list1CurrentNode.next;
    list2CurrentNode = list2CurrentNode.next;
  }
  return resultList;
}

const sumListReversed = (list1, list2) => {
  // reference to check if value of previous addition was > 10
  let largerThanTen = 0;
  // pointer for current list1 and 2 nodes
  let list1CurrentNode = list1.head;
  let list2CurrentNode = list2.head;
  // new list
  let resultList = new List();
  let prevNode = resultList.head;
  // variable to store sum of nodes from list1 and list2
  let currentSum;
  let nodeToAdd;
  // loop through list
  while (list1CurrentNode) {
    // add list1CurrentNode value to list2CurrentNode value
    currentSum = list1CurrentNode.value + list2CurrentNode.value + largerThanTen;
    // if currentSum > 0, 
    if (currentSum > 10) {
      nodeToAdd = new Node(currentSum - 10);
      largerThanTen = 1;
    } else {
      nodeToAdd = new Node(currentSum);
      largerThanTen = 0;
    }
      resultList.addToHead(nodeToAdd);
      
    // largerThanTen = currentSum - 10;
    // add 9 to tail of resultList;
    // else
    // add currentSum to tail of resultList
    // largerThanTen = 0;
    list1CurrentNode = list1CurrentNode.next;
    list2CurrentNode = list2CurrentNode.next;
  }
  return resultList;
}


const testList1 = new List();
const testList2 = new List();
const node1 = new Node(7);
const node2 = new Node(1);
const node3 = new Node(6);
const node4 = new Node(5);
const node5 = new Node(9);
const node6 = new Node(2);
testList1.addToHead(node3);
testList1.addToHead(node2);
testList1.addToHead(node1);
testList2.addToHead(node6);
testList2.addToHead(node5);
testList2.addToHead(node4);
sumList(testList1, testList2);

