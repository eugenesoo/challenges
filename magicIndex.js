// [10,8,6,5,4,1]
// get middle number
// check if middle number is the same as position,
// if so, return position
// check if middle number is larger than its position
// if it is, means number is on the right of the array
// set new startindex to middle,
// set new middle with math.floor(startindex + endindex / 2);
// if it is not, means number is on left of the array
// set new endindex to midde,
// set new middle with math.floor(startindex + endindex / 2);
//
// repeat
// [10,4,2,1,0]
//
// [3,1,0,-1,-5,-10]
//
const magicIndexLoop = (array) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  while (startIndex <= endIndex) {
    if (middleIndex === array[middleIndex]) {
      return middleIndex;
    } else if (array[middleIndex] > middleIndex) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
    middleIndex = Math.floor((startIndex + endIndex) / 2);
  }

  return -1;
}

const magicLoopRecursive = (array, startIndex = 0, endIndex = array.length - 1) => {
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
  if (startIndex === endIndex) {
    return -1;
  }

  if (array[middleIndex] === middleIndex) {
    return middleIndex;
  } else if (array[middleIndex] > middleIndex) {
    return magicLoopRecursive(array, middleIndex + 1, endIndex);
  } else {
    return magicLoopRecursive(array, startIndex, middleIndex - 1);
  }
}
