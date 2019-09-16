function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let position = 0;
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      position++;
    } else if (arr[i] > num) {
      position - 1;
    } else if (arr[i] = num) {
      position - 1;
    }
  }
  console.log(position);
  return position;
}

getIndexToIns([10, 20, 30, 40, 50], 30);