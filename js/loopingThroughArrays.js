function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  let pushArr = [];
  let deleteIndex;
  let x;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
        //console.log(newArr);
      }
    }         
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));