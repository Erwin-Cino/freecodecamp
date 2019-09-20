function destroyer(arr) {
  // Remove all the values
  return arr.filter(y => !Object.values(arguments).includes(y));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);