function splitify(str) {
  // Add your code below this line
  let wordArray = []
  let newStr = str.replace(/[,.-]/g," ");
  newStr.split(' ').map( x=> {
    wordArray.push(x);
  });
  
  console.log(wordArray);
  return wordArray;
 
  // Add your code above this line
}
splitify("Hello World,I-am code");