function checkPositive(arr) {
  // Add your code below this line
  
  return arr.every((items) => {
    return items > 0; //true or false
  })
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

//value is false because not all is positive