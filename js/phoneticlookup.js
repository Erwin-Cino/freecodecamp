// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));