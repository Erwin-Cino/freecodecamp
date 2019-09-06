const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  let filtered = arr.filter((arr) => arr % 1 == 0 && arr > 0);
  const squaredIntegers = filtered.map((filtered) => {
    return filtered * filtered
  });
  console.log(squaredIntegers);

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
