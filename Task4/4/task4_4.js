module.exports = function getTenLastDigits(NumberToCalculateItsSum) {
  if (NumberToCalculateItsSum > 1000
    || NumberToCalculateItsSum < 1) {
    throw Error('n not in range 1..1000');
  }

  let sumResult = 0;
  let base;
  let power;
  let powerResult;
  const MODULE = 10000000000; // module

  for (let i = 1; i < NumberToCalculateItsSum + 1; i++) {
    base = i;
    power = i;
    powerResult = 1;

    base %= MODULE;
    for (let j = 1; j < power + 1; j++) {
      powerResult = (powerResult * base) % MODULE;
    }
    sumResult += powerResult;
    sumResult %= MODULE;
  }

  return sumResult;
};
