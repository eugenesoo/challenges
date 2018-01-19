const intersection = (list1, list2) => {
  // interate through list1
  let list1Index = list1.head;
  const listNodes = new Map();
  while (list1Index) {
    listNodes.set(list1Index, true);
    list1Index = list1Index.next;
  }

  let list2Index = list2.head;
  while (list2Index) {
    if (listNodes.has(list2Index)) {
      return list2Index;
    }
    list2Index = list2Index.next;
  }

  return false;
}

const intersectionAlt = (list1, list2) => {
  if (list1.tail !== list2.tail) {
    return false;
  }
  // get list 1 length
  let list1Index = list1.head;
  let list1Length = 0;
  while (list1Index) {
    list1Length += 1;
    list1Index = list1Index.next;
  }
  // get list 2 length
  let list2Index = list2.head;
  let list2Length = 0;
  while (list2Index) {
    list2Length += 1;
    list2Index = list1Index.next;
  }
  // set starting positions of list1 and list2 indexes
  list2Index = list2.head;
  list1Index = list1.head;
  if (list1Length > list2Length) {
    for (let i = 0; i < list1Length - list2Length; i += 1) {
      list1Index = list1Index.next;
    }
  } else {
    for (let i = 0; i < list2Length - list1Index; i += 1) {
      list2Index = list2Index.next;
    }
  }
  // iterate through list1 and 2 until list1Index = list2Index
  while (list1Index) {
    if (list1Index === list2Index) {
      return true;
    }
    list1Index = list1Index.next;
    list2Index = list2Index.next;
  }
} 
