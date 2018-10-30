module.exports = function getNFirstPrimes(n) {
  const limit = n * 8;
  const sqrt = Math.sqrt(limit) + 1;// +1 for cases <= to use < instead
  const compareN = limit + 1;// for cases <= to use < instead
  const isprime = new Uint32Array(limit + 1);
  let i2 = 0;
  let j2;

  for (let i = 1; i < sqrt; i++) {
    i2 += 2 * i - 1;
    j2 = 0;
    for (let j = 1; j < sqrt; j++) {
      j2 += 2 * j - 1;
      let num = 4 * i2 + j2;
      if ((num < limit) && (num % 12 === 1 || num % 12 === 5)) isprime[num] = num;
      num -= i2;
      if ((num < compareN) && (num % 12 === 7)) isprime[num] = num;
      num -= 2 * j2;
      if ((i > j) && (num < compareN) && (num % 12 == 11)) isprime[num] = num;
    }
  }
  for (let i = 5; i < sqrt; i++) {
    if (isprime[i]) {
      const s = i * i;
      for (let j = s; j < compareN; j += s) isprime[j] = false;
    }
  }
  isprime[2] = 2;
  isprime[3] = 3;

  return isprime
    .filter((v, i) => 
        !!v 
        && (i === 3 || i % 3 !== 0) 
        && (i === 5 || i % 5 !== 0))
    .slice(0, n);
};
