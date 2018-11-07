module.exports = function getSumFirstEvenFibonacci(NumberOfEventFibonacci) {
  let first = 1;
  let second = 1;
  const list = [];

  while (list.length < NumberOfEventFibonacci) {
    [first, second] = [second, first + second];
    if (second % 2 === 0) list.push(second);
  }
  return list.reduce((previous, value) => previous + value);
};
