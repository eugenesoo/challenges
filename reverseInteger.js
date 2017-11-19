// https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let result = x.toString().split('');
    let firstPointer;
    let lastPointer = result.length - 1;
    
    if (result[0] === '-') {
        firstPointer = 1;
    } else {
        firstPointer = 0;
    }
    while (firstPointer < lastPointer) {
        const store = result[firstPointer];
        result[firstPointer] = result[lastPointer];
        result[lastPointer] = store;
        firstPointer += 1;
        lastPointer -= 1;
    }
    
    return Math.abs(parseInt(result.join(''), 10)) < Math.pow(2, 31) - 1 ? parseInt(result.join(''), 10) : 0;
}
