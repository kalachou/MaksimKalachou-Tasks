module.exports = function getFirstPrimesLessThanN(n) {
  const sqrt = Math.ceil(Math.sqrt(n));// +1 for cases <= to use < instead
  const isPrime = new Uint8Array(n);
  let i2 = 0;
  let j2;
  let num;
  let i;
  let j;
  let s;

  for (i = 1; i < sqrt; i++) {
    i2 += 2 * i - 1;
    j2 = 0;
    for (j = 1; j < sqrt; j++) {
      j2 += 2 * j - 1;
      num = 4 * i2 + j2;
      if ((num < n) && (num % 12 === 1 || num % 12 === 5)) isPrime[num] = isPrime[num] ? 0 : 1;
      num -= i2;
      if ((num < n) && (num % 12 === 7)) isPrime[num] = isPrime[num] ? 0 : 1;
      num -= 2 * j2;
      if ((i > j) && (num < n) && (num % 12 === 11)) isPrime[num] = isPrime[num] ? 0 : 1;
    }
  }
  for (i = 5; i < sqrt; i++) {
    if (isPrime[i]) {
      s = i * i;
      for (j = s; j < n; j += s) isPrime[j] = 0;
    }
  }
  isPrime[2] = 1;
  isPrime[3] = 1;

  return isPrime.reduce((p, v, i) => {
    if (!!v
          && (i === 3 || i % 3 !== 0)
          && (i === 5 || i % 5 !== 0)) p.push(i); return p;
  }, []);
};
/*
function getNFirstPrimes (n) {
    let sqrt = Math.sqrt(n);
    let isprime = new Array(n+1).fill(false);
    for (let i = 1; i <= sqrt; i++) {
        for(let j = 1; j<= sqrt; j++) {
            i2 = i*i;
            j2 = j*j;
            let num = 4*i2 + j2;
            if (num < n && (num%12 ===1 || num%12 === 5)) isprime[num] = true;
            num-=i2;
            if(num<=n && num%12 == 7) isprime[num] = true;
            num-=2*j2;
            if (i>j && num <= n && num%12 ==11) isprime[num]=true;
        }
    }
    for (let i = 5; i <= sqrt; i++) {
      if (isprime[i]) {
          let s = i*i;
          for (let j = s; j <= n; j += s)
            isprime[j] = false;
        }
    }
    isprime[2] = true;
    isprime[3] = true;
    return isprime.map((v,i)=>{if(v===true) return v=i;}).filter(x=>x!=false);
}
*/
