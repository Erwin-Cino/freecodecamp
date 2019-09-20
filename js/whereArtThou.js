function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let result = collection.filter(x => {
    console.log(JSON.stringify(x))
    return !Object.keys(source).map(y => {
      return (source[y] == x[y])
    }).includes(false)
  })
  //console.log(JSON.stringify(result));
  // Only change code above this line
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });