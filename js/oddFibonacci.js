function sumFibs(num) {
  let prev = 0;
  let now = 1;
  let result = 0;
  while (now <= num) {
    if (now % 2 !== 0) {
      result += now;
      //console.log(result);
    }
    now += prev;
    console.log(now)
    prev = now - prev;
    console.log(prev);
  } 
  return result;
}

sumFibs(10);