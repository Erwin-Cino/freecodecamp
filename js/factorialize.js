function factorialize(num) {
  let result = 1;
  for (let counter = 1; counter <= num; counter++) {
    result *= counter;
    console.log(result);
  }
  
  return result;
}

factorialize(10);