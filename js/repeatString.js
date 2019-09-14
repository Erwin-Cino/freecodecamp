function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = "";
  for (let i = 0; i < num; i++) {
    if (num > 0) {
      result += str;
      console.log(result);
    }
  }
  
  return result;
}

repeatStringNumTimes("abc", 3);