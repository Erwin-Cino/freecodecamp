function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let strLength = str.length;
  let targetLength = target.length;
  let start = str.length - target.length;
  console.log(start);
  let endStr = str.substring(start, strLength);
  let result = null; 
  result = endStr == target ? true : false;  
  return result;
}

confirmEnding("Bastian", "n");