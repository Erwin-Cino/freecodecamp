function sentensify(str) {
  // Add your code below this line
  
  let newStr = [];
  newStr.push(str);
  let testStr = str.split(/[,.-]/g).join(" ");
  console.log(testStr);
  return testStr;
  
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");