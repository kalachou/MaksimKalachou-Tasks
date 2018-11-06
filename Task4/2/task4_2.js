module.exports = function getNFirstPrimes(n) {
  const limitEstimation = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)) - 1 / 2));
  const limit = n > 20 ? limitEstimation : 72;

  // +1 for cases <= to use < instead
  const squareRootN = Math.ceil(Math.sqrt(limit));
  const isPrime = new Uint8Array(limit);
  let i2 = 0;
  let j2;
  let num;
  let i;
  let j;
  let s;

  // This is JS implenmentation of Seive of Atkin algorithm
  // https://en.wikipedia.org/wiki/Sieve_of_Atkin
  for (i = 1; i < squareRootN; i++) {
    i2 += 2 * i - 1;
    j2 = 0;

    for (j = 1; j < squareRootN; j++) {
      j2 += 2 * j - 1;
      num = 4 * i2 + j2;

      if ((num < limit)
        && (num % 12 === 1 || num % 12 === 5)) {
        isPrime[num] = isPrime[num] ? 0 : 1;
      }

      num -= i2;
      if ((num < limit)
        && (num % 12 === 7)) {
        isPrime[num] = isPrime[num] ? 0 : 1;
      }

      num -= 2 * j2;
      if ((i > j)
        && (num < limit)
        && (num % 12 === 11)) {
        isPrime[num] = isPrime[num] ? 0 : 1;
      }
    }
  }

  for (i = 5; i < squareRootN; i++) {
    if (isPrime[i]) {
      s = i * i;
      for (j = s; j < limit; j += s) isPrime[j] = false;
    }
  }

  isPrime[2] = 1;
  isPrime[3] = 1;

  return isPrime
    .reduce((previous, current, index) => {
      if (!!current
        && (index === 3 || index % 3 !== 0)
        && (index === 5 || index % 5 !== 0)) previous.push(index); return previous;
    }, [])
    .slice(0, n);
};
