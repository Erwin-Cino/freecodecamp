function uniteUnique(arr) {
  //console.log(JSON.stringify(arguments));
  let oneArr = [...arguments]
  let result = [];
  for(let i = 0; i < oneArr.length; i++ ) {
    for (let j = 0; j < oneArr[i].length; j++) {
      console.log(oneArr[i][j]);
      if (!result.includes(oneArr[i][j])) {
        result.push(oneArr[i][j]);
      }
    }
  }
  console.log(result);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);