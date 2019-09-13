function findLongestWordLength(str) {
  let arr = [];
  let result = 0;
  let longest = null;
  arr = str.split(' ');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i].length) {  
      result = arr[i].length;
      longest = arr[i];
      console.log(longest);
    }
  }


  return result
  ;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");