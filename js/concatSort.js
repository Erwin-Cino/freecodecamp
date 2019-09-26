var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArr = [];
  newArr = newArr.concat(arr);
  return newArr.sort()
  //console.log(newArr);
  
  // Add your code above this line
}
nonMutatingSort(globalArray);
