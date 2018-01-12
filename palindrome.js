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
