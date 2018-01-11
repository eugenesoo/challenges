const List = function () {
  this.head = null;
  this.tail = null;
};

const Node = function (value) {
  this.value = value;
  this.next = null;
};

List.prototype.addToTail = function (node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    const temp = this.tail;
    this.tail = node;
    temp.next = this.tail;
  }
}

List.prototype.partition = function (value) {
  let currentNode = this.head;
  const beforePartitionList = new List();
  const afterPartitionList = new List();
  const partitionList = new List();
  while (currentNode) {
    let nodeToInsert = new Node(currentNode.value);
    if (currentNode.value < value) {
      beforePartitionList.addToTail(nodeToInsert);
    } else if (currentNode.value > value) {
      afterPartitionList.addToTail(nodeToInsert);
    } else {
      partitionList.addToTail(nodeToInsert);
    } 
    currentNode = currentNode.next;
  }
  // merge all list together
  // join tail of beforePartitionList with head of partitionList
  beforePartitionList.tail.next = partitionList.head;
  // join tail of partitionList with head of afterPartitionList
  partitionList.tail.next = afterPartitionList.head;
  return beforePartitionList;
}

const tempList = new List();
const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(8);
const node4 = new Node(5);
const node5 = new Node(10);
const node6 = new Node(2);
const node7 = new Node(1);
tempList.addToTail(node1);
tempList.addToTail(node2);
tempList.addToTail(node3);
tempList.addToTail(node4);
tempList.addToTail(node5);
tempList.addToTail(node6);
tempList.addToTail(node7);
tempList.partition(5);
