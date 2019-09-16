function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let newArr = [];
  arr2.map(x => newArr.push(x));
  arr1.map(y => {
    newArr.splice(n,0,y)
    n++
  })
  console.log(newArr);
  return newArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);