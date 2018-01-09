const returnKthToLast = (list, k) => {
  let currentIndex = 0;
  let currentNode = list.head;
  const result = [];
  while (currentIndex < k) {
    currentNode = currentNode.next;
    currentIndex += 1;
  }
  while (currentNode) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return result;
}
