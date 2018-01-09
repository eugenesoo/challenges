const removeDups = (list) => {
  //create object to hold list values
  const values = {};
  //create pointer to store current position
  let currentNode = list.head;
  //loop through list until list[pointer].next is null (which means end of list)
  while (currentNode !== null) {
    if (values[currentNode.value]) {
      // delete currentNode from list;
      list.deleteNode(currentNode);
    } else {
      values[currentNode.value] = true;
    }
    currentNode = currentNode.next;
  }
  return list;
  //during loop, check if value is in object.
  //if in object, delete node from linkedlist
  //if not in object, add value to object
  //make currentNode = currentNode.next;
  //return list
}

const List = function () {
  this.head = null;
  this.tail = null;
}

const Node = function (value) {
  this.value = value;
  this.next = null;
}

List.prototype.addToTail = function (node) {
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    let temp = this.tail;
    temp.next = node;
    this.tail = node;
  }
}

List.prototype.deleteNode = function (node) {
  if (this.head === node) {
    this.head = this.head.next;
  } else {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === node) {
        currentNode.next = currentNode.next.next;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
}
