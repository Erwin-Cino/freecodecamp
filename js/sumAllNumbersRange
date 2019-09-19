function sumAll(arr) {
  let counter = arr[0];
  let middleItems = [];
  let middleAdd;
  let endsAdd;
  let loopCounter;
  arr.filter(function(loop) {
    if (counter > loop) {
      loopCounter = (counter - loop) -1;
    } else {
      loopCounter = (loop - counter) -1;
    }
  })
  console.log(loopCounter);
  for (let i = 0; i < loopCounter; i++) {
    if (arr[0] > arr[arr.length - 1]) {
      counter--;
      middleItems.push(counter);
      console.log(middleItems);
    } else {
      counter++;
      middleItems.push(counter);
    }
    
  }
  middleAdd = middleItems.reduce((a,b) => {
    return a + b;
  })
  console.log(middleAdd);
  endsAdd = arr.reduce((a,b) => {
    return a + b;
  })
  console.log(endsAdd + middleAdd);
  
  return middleAdd + endsAdd;
}

sumAll([5,10]);