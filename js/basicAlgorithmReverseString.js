function reverseString(str) {
  let arr;
  arr = str.split('').reverse().join('');
  console.log(arr); 
  return arr;
}

reverseString("hello");