function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  let index1 = [];
  let index2 = [];
  let result = [];
  newArr = arr1.concat(arr2);
  newArr.map((x,index) => {
    index1 = newArr.slice(0,arr1.length);
    index2 = newArr.slice(arr1.length, newArr.length);
    if (index1.indexOf(x) == -1 || index2.indexOf(x) == -1) {
       result.push(x);
    }
    console.log(index2.indexOf(x))
    console.log(index1.indexOf(x))
  })
  console.log(result);
  return result;
  //return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);