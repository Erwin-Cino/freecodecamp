// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  let counter = fixedValue + 1;
  return counter;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4