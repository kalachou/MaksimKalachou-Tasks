module.exports = function getNFirstPrimes(n) {
  const limit = n > 20 ? Math.ceil(n * (Math.log(n) + Math.log(Math.log(n)) - 1 / 2)) : 72;
  const sqrt = Math.ceil(Math.sqrt(limit));// +1 for cases <= to use < instead
  const isprime = new Uint8Array(limit);
  let i2 = 0;
  let j2;

  for (let i = 1; i < sqrt; i++) {
    i2 += 2 * i - 1;
    j2 = 0;
    for (let j = 1; j < sqrt; j++) {
      j2 += 2 * j - 1;
      let num = 4 * i2 + j2;
      if ((num < limit) && (num % 12 === 1 || num % 12 === 5)) isprime[num] = isprime[num] ? 0 : 1;
      num -= i2;
      if ((num < limit) && (num % 12 === 7)) isprime[num] = isprime[num] ? 0 : 1;
      num -= 2 * j2;
      if ((i > j) && (num < limit) && (num % 12 === 11)) isprime[num] = isprime[num] ? 0 : 1;
    }
  }

  for (let i = 5; i < sqrt; i++) {
    if (isprime[i]) {
      const s = i * i;
      for (let j = s; j < limit; j += s) isprime[j] = false;
    }
  }

  isprime[2] = 1;
  isprime[3] = 1;

  return isprime
    .reduce((p, v, i) => 
        { if (!!v 
        && (i === 3 || i % 3 !== 0) 
        && (i === 5 || i % 5 !== 0)) p.push(i); return p; }, [])
    .slice(0, n);
};
