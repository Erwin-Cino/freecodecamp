function chunkArrayInGroups(arr, size) {
  // Break it up.
  let temp = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }
    if (temp.length !== 0) {
      result.push(temp);
    } 
  return result;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  console.log(result);
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);