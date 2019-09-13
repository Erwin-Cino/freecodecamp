function largestOfFour(arr) {
  // You can do this!
  let number = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let big = arr[i][0];
    //console.log(tutor)
    for (let j = 0; j < arr[i].length; j++ ) {
      if (big < arr[i][j]) {
        big = arr[i][j];
        //newArr.push(big);
        //console.log(big);
      }    
    }
    newArr.push(big);
  }
      
  console.log(newArr);
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);