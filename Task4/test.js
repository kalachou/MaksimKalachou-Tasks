const assert = require('assert');

Object.freeze(assert);

const getFirstPrimesLessThanN = require('./1/task4_1.js');
const getNFirstPrimes = require('./2/task4_2.js');
const getSumFirstEvenFibonacci = require('./3/task4_3.js');
const getTenLastDigits = require('./4/task4_4.js');
const getAverageValue = require('./5/task4_5.js');
const getMaxValue = require('./6/task4_6.js');
const getUnicValues = require('./7/task4_7.js');
const isPalindrome = require('./8/task4_8.js');
const getSumDigits = require('./9/task4_9.js');



describe('getFirstPrimesLessThanN', () => {
  it('10', () => {
    const result = getFirstPrimesLessThanN(10);
    assert.deepEqual(result, [2, 3, 5, 7]);
  });

  it('100', () => {
    const result = getFirstPrimesLessThanN(100);
    assert.equal(result.length, 25);
    assert.equal(result.pop(), 97);
  });

  it('101', () => {
    const result = getFirstPrimesLessThanN(101);
    assert.equal(result.length, 25);
    assert.equal(result.pop(), 97);
  });

  it('3571', () => {
    const result = getFirstPrimesLessThanN(3571);
    assert.equal(result.length, 499);
    assert.equal(result.pop(), 3559);
    assert.equal(result[59], 281);
    assert.equal(result[159], 941);
    assert.equal(result[199], 1223);
    assert.equal(result[200], 1229);
    assert.equal(result[306], 2027);
    assert.equal(result[307], 2029);
  });

  it('10 000', () => {
    const result = getFirstPrimesLessThanN(10000);
    assert.equal(result.length, 1229);
    assert.equal(result[result.length-1], 9973);
  });

  it('100 000', () => {
    const result = getFirstPrimesLessThanN(100000);
    assert.equal(result.length, 9592);
    assert.equal(result[result.length-1], 99991);
  });

  it('1 000 000', () => {
    const result = getFirstPrimesLessThanN(1000000);
    assert.equal(result.length, 78498);
    assert.equal(result[result.length-1], 999983);
  });

  it('10 000 000', () => {
    const result = getFirstPrimesLessThanN(10000000);
    assert.equal(result.length, 664579);
    //assert.equal(result[result.length-1], 999983);
  });
});

describe('getNFirstPrimes', () => {
  it('1st prime', () => {
    const result = getNFirstPrimes(1);
    assert.deepEqual(result, [2]);
  });

  it('3 first primes', () => {
    const result = getNFirstPrimes(3);
    assert.deepEqual(result, [2,3,5]);
  });

  it('20th prime', () => {
    const result = getNFirstPrimes(20);
    assert.deepEqual(result[19], 71);
  });

  it('60th prime', () => {
    const result = getNFirstPrimes(60);
    assert.deepEqual(result[59], 281);
  });
});

describe('getSumFirstEvenFibonacci', () => {
  it('Sum of 2 first even fibonacci is 10', () => {
    const result = getSumFirstEvenFibonacci(2);
    assert.equal(result, 10);
  });

  it('Sum of 3 first even fibonacci is 44', () => {
    const result = getSumFirstEvenFibonacci(3);
    assert.equal(result, 44);
  });

  it('Sum of 4 first even fibonacci is 188', () => {
    const result = getSumFirstEvenFibonacci(4);
    assert.equal(result, 188);
  });
});

describe('getTenLastDigits', () => {
  it('10', () => {
    const result = getTenLastDigits(10);
    assert.equal(result, 405071317);
  });
});

describe('getAverageValue', () => {
  it('Average value of [1, 2, 3, 4, 5] is 3', () => {
    const result = getAverageValue([1, 2, 3, 4, 5]);
    assert.equal(result, 3);
  });
});

describe('getMaxValue', () => {
  it('[1, 2, 3, 4, 5]', () => {
    const result = getMaxValue([1, 2, 3, 4, 5]);
    assert.equal(result, 5);
  });

  it('[-1, -208, -3, -4, -5, -666]', () => {
    const result = getMaxValue([-1, -208, -3, -4, -5, -666]);
    assert.equal(result, -1);
  });
});

describe('getUnicValues', () => {
  it('[1,"word", 1, "word", "word", "word1"]', () => {
    const result = getUnicValues([1,"word", 1, "word", "word", "word1"]);
    assert.deepEqual(result, [1, 'word', 'word1']);
  });
});

describe('isPalindrome', () => {
  it('Доход', () => {
    const result = isPalindrome('Доход');
    assert.equal(result, true);
  });

  it('А роза упала на лапу Азора', () => {
    const result = isPalindrome('А роза упала на лапу Азора');
    assert.equal(result, true);
  });

  it('Eva, can I see bees in a cave?', () => {
    const result = isPalindrome('Eva, can I see bees in a cave?');
    assert.equal(result, true);
  });

  it('Sarah, can I see bees in a cave?', () => {
    const result = isPalindrome('Sarah, can I see bees in a cave?');
    assert.equal(result, false);
  });
});
 
describe('getSumDigits', () => {
  it('564674474', () => {
    const result = getSumDigits('564674474');
    assert.equal(result, 47);
  });
});
