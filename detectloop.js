const detectLoop (list) => {
  // create map to store nodes
  const listMap = new Map();
  // iterate through loop with index
  let listIndex = list.head;
  while (listIndex) {
    if (listMap.has(listIndex)) {
      return listIndex;
    } else {
      listMap.set(listIndex);
    }
    listIndex = listIndex.next;
  }
  return false;
}
