const parseToArr = (str) => {
  const strArr = str.split('\n');
  const result = [];
  strArr.forEach(str => {
    result.push(str.split('\t'));
  });
  return result;
}

const calculateDiff = (array) => {
  let smallestNum;
  let largestNum;
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    let smallestNum = parseInt(array[i][0], 10);
    let largestNum = parseInt(array[i][0], 10);
    for (let j = 1; j < array[i].length; j += 1) {
      if (parseInt(array[i][j], 10) < smallestNum) {
        smallestNum = parseInt(array[i][j], 10);
      } else if (parseInt(array[i][j], 10) > largestNum) {
        largestNum = parseInt(array[i][j], 10);
      }
    }
    sum += (largestNum - smallestNum);
  }
  return sum;
}

const calculateEvenlyDivide = (array) => {
  let hash;
  let num;
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    hash = {};
    for (let j = 0; j < array.length; j += 1) {
      num = parseInt(array[i][j]);
      hashKeys = Object.keys(hash);
      for (let k = 0; k < hashKeys.length; k += 1) {
        if (parseInt(hashKeys[k]) > num) {
          if (parseInt(hashKeys[k]) % num === 0) {
            sum += parseInt(hashKeys[k] / num);
          }
        } else {
          if (num % parseInt(hashKeys[k]) === 0) {
            sum += parseInt(num / hashKeys[k]);
          }
        }
      }
      hash[num] = true;
    }
  }
  return sum;
}
