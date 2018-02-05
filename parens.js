const parens = (n) => {
  // base case
  if (n === 1) {
    return ['()'];
  }
  // get answer from n - 1,
  const prevresults = paren(n - 1);
  const newresults = [];
  // iterate through prevresults
  for (let i = 0; i < prevresults.length; i += 1) {
    // put new parens in front of prevresults[i]
    newresults.push('()' + prevresults[i]);
    // push to newresults
    // create pointer to start of prevresults[i];
    let currentindex = 0;
    while (currentindex < prevresults[i].length) {
      if (prevresults[i][currentindex] === '(') {
        newresults.push(prevresults[i].slice(0, currentindex + 1) + '()' + prevresults[i].slice(currentindex + 1));
      }
      currentindex += 1;
    }
    // while pointer < prevresults[i].length
    // check if character at pointer is right parens,
    // if right parens, create clone of string
    // add () to position after right parens, push to newresult,
    // add 1 to the pointer,
    // repeat loop
  }

  return newresult;
}
