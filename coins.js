// total number of ways to get 100 = total numbers of ways to get 99 + total number of ways to get 95 + total number of ways to get 90 + total number of ways to get 75
//
// coins(100) = coins(99) + coins(95) + coins(90) + coins(75);
//
//
//
// coins(5) = coins (4) + coins(0);
//
// coins(10) = coins (9) + coins(5) + coins(0);
//
//
// coins(9) = coins(8) + coins(4);
// 
//
// coins(8) = coins(7) + coins(3);
// )
//
//coins(7) = coins(6) + coins(2);
//
//coins(6) = coins(5) + coins(1);
//
/
// 1,1,1,1,1,1,1,1,1,1
// 1,1,1,1,1,5
// 5,5
// 10
//
//
// coins(4) = coins(3)
  //
  //
  //
  // 10 made up of 0 5, 1 5 or 2 5s.
  // coins(10) = coins(10 with no 5) + coins(5) +coins(0)
  //
  //
  // if the coin type is 1, return 1,
  //[25, 10, 5, 1]
  //
  //coins(amount, coinType)
  //
  //if coinType = 3, return 1
  //
  //amount 25
  //coins(25, 0)  = coins(25, 1) + coins (0, 1);
  //              = 11 +  1 = 12
  //coins (25, 1) = coins (25, 2) + coins (15, 2) + coins(5, 2);
  //              = 5 + 4 + 2
  //
  //coins (25, 2) = coins (25, 3) + coins (20, 3) + coins (15, 3) + coins (10, 3) + coins (5, 3) + coins (0, 3); => 5
  //
  //coins (15,2) = coins(15, 3) + coins(10, 3) + coins (5, 3) + coins (0, 3);
  //
  //coins (10,0) = coins (10, 1)
  //coins (10,1) = coins(10,2) + coins (0,2);
  //coins (10,2) = coins(10,3) + (5,3) + (0,3);
  

  const coins = (total, coinIndex = 0) => {
    const coinTypes = [25, 10, 5, 1];

    if (coinIndex === 3 || total === 0) {
      return 1;
    }

    let numOfWays = 0;
  
    while (total >= 0) {
      numOfWays += coins(total, coinIndex + 1);
      total -= coinTypes[coinIndex];
    }

    return numOfWays;
  }

const coinsMemoize = (total) => {
  const coinTypes = [25,10,5,1];
  const memoized = {};

  const coinTraversal = (total, currentCoinIndex = 0) => {
    if (total === 0 || currentCoinIndex === 3) {
      return 1;
    };
    
    if (memoized[`${total} ${currentCoinIndex}`]) {
      return memoized[`${total} ${currentCoinIndex}`];
    }

    let numOfWays = 0;
    let originalTotal = total;
    while (total >= 0) {
      numOfWays += coinTraversal(total, currentCoinIndex + 1);
      total -= coinTypes[currentCoinIndex];
    }

    memoized[`${originalTotal} ${currentCoinIndex}`] = numOfWays;

    return numOfWays;
  }

  return coinTraversal(total);
}
