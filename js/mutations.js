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
  
  return result

  // stringFirst = arr[0].split('').map(x => {
  //   x.toLowerCase(i);
  //   i++;
  //   arr[1].split('').map(y => {
  //     y.toLowerCase(i);
  //      if (x == y) {
  //        console.log(x);
  //        result = true;
  //      } else {
  //        result = false;
  //      }
  //   })
  // });

mutation(["ZyxwVutsrqponmlkjihgfedcba", "qrstu"]);