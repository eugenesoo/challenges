const compareStrings = (pattern, string) => {


  const travel = (currentPatternIndex = 0, currentStrIndex = 0, currentPattern = {}) => {
    for (let i = currentStrIndex; i < string.length; i += 1) {
      // check if pattern[i] exist in currentPattern,
      //    get value of currentPattern[pattern[i]];
      //    for (let j = 0; j < pattern.length; j += 1) {
      //      !compare with string[currentStrIndex + j];
      //      return
      //    }
      //    if (pattern is at pattern.length - 1 and currentStrIndex + j is string.length - 1)
      //    return true;
      //    travel (currentPatternIndex + 1, currentStrIndex + pattern.length, currentPattern)
      // else
      //    set pattern from currentStrIndex + i
      //    save in currentPattern,
      //    travel (currentPatternIndex + 1, 
    }
  }
  for (let i = currentPatternIndex; i < pattern.length; i += 1) {
    // check if pattern[i] exist in currentPattern,
    // if no,
    //   slice(0, currentStrindex + 1) of string and store it in currentPattern
    //   return compareStrings(pattern, string, currentPatternIndex + 1, currentStrIndex + 1, currentPattern
    // else,
    //   check if 
  }

}
how do i create different strings from the pattern?

  if 
  for (let i = 0; i < string.length; i += 1) {
    const patternString = string.slice(currentStrIndex, i + 1);
    const newPatternObj = Object.assign({}, patternObj);
    newPatternObj[currentPatternChar] = patternString;
    
  }
// iterate through length of string
// check if pattern has been assigned value
// if not, assign value,
//    move on to the next strIndex
// if yes, 
//    check if currentStrIndex fits pattern value,
//      
//
// aaaa
// abcabcabcabc true
//
//
//a
//  try a
//  next pattern is a
//  string is b - fail
//  
//  try ab
//  next pattern is a
//  string is bc - fail
//
//  try abc
//  next pattern is a
//  string is abc - pass
//  pattern not 4 yet, continue
//        try abc
//        next pattern is a
//        string is abc - pass
//        pattern not 4, continue
//              try abc
//              next pattern is a
//              string is abc - pass
//              pattern is 4, total pass
// 
// aaa
// abc
//
// a
//  try a
//  next pattern is a
//  string is b - fail
//   
//  try ab
//  next pattern is a
//  string is c - fail
//
//  try abc
//  next pattern is a
//  string is null - fail
//
//  fail
// 
//
// aab
// aaa
//
// a
//  try a
//  next pattern is a
//  string is a - pass
//  pattern not at 3, continue
//      try a
//      next pattern is a
//      string is a - pass
//      pattern not at 3, continue
//          try a
//          next pattern is b
//          string is a - fail
//
// abc
// aa
// abcabc
// abaa
// abcaaaabcabc
// 
// iterate through pattern,
// when im at first alphabet,
// check if pattern alphabet exist in current recursion,
// if not, set string.slice(currentStringCharacter,1) to the new pattern
// recurse
//
// iterate through string,
// use string.slice(0,1) as pattern for next iteration
// recurse with 2nd alphabet of pattern, 2nd character of string, current pattern {a: a}
//    
// if pattern matches
// recurse -> 
//
// if all the way at last character of string, and pattern is not, return false.
// when pointer is at last character of pattern, and string still matches, return true.
