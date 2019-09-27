function steamrollArray(arr) {
  // I'm a steamroller, baby
  arr = arr.flat(Infinity);
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);