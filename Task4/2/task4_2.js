module.exports = function getNFirstPrimes(n) {
  const limit = n > 20 ? Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)) - 1 / 2)) : 72;
  const sqrt = Math.ceil(Math.sqrt(limit));// +1 for cases <= to use < instead
  const isPrime = new Uint8Array(limit);
  let i2 = 0;
  let j2;

  for (let i = 1; i < sqrt; i++) {
    i2 += 2 * i - 1;
    j2 = 0;
    for (let j = 1; j < sqrt; j++) {
      j2 += 2 * j - 1;
      let num = 4 * i2 + j2;
      if ((num < limit) && (num % 12 === 1 || num % 12 === 5)) isPrime[num] = isPrime[num] ? 0 : 1;
      num -= i2;
      if ((num < limit) && (num % 12 === 7)) isPrime[num] = isPrime[num] ? 0 : 1;
      num -= 2 * j2;
      if ((i > j) && (num < limit) && (num % 12 === 11)) isPrime[num] = isPrime[num] ? 0 : 1;
    }
  }

  for (let i = 5; i < sqrt; i++) {
    if (isPrime[i]) {
      const s = i * i;
      for (let j = s; j < limit; j += s) isPrime[j] = false;
    }
  }

  isPrime[2] = 1;
  isPrime[3] = 1;

  return isPrime
    .reduce((prev, curr, i) => {
      if (!!curr
        && (i === 3 || i % 3 !== 0)
        && (i === 5 || i % 5 !== 0)) prev.push(i); return prev;
    }, [])
    .slice(0, n);
};
