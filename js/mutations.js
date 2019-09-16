function mutation(arr) {
  let result;
  // arr.map(x => {
  //   x = x.split('');
  //   console.log(x)
  // })
  let newArr = [];
  let stringFirst;
  let i = 0;
  stringFirst = arr[i].split('').map(x => {
    newArr.push(x.toLowerCase());
  })
  console.log(newArr);
  
  return result;
}

mutation(["ZyxwVutsrqponmlkjihgfedcba", "qrstu"]);