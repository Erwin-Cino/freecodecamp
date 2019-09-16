function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let n = 0; 
  let result = [];
  arr.map(x => {
    console.log(Number.isNaN(x));
    if (x !== false && x !== null && x !== "" && x !== 0 && x !== undefined && Number.isNaN(x) !== true) {
      result.push(x)  
    }
  })
  return result;
}

bouncer([false, null, 0, NaN, undefined, ""]);