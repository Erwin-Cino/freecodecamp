function sumPrimes(num) {
  let primes = [];
  let result = [];
  let final;
  for (let i = 2; i <= num; i++) {
    primes[i] = true
  }
  let limit = Math.sqrt(num);
  //console.log(limit);
  for (let i = 2; i <= limit; i++) {
    if (primes[i] == true) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }
  for (let i = 2; i <= num; i++) {
    if (primes[i] === true) {
      result.push(i);
    }
  }
  final = result.reduce((a,b) => {
    return a + b;
  })
  console.log(final)
  return final;
}

sumPrimes(977);