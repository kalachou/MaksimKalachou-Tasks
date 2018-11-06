module.exports = function getSumFirstEvenFibonacci(NumberOfEventFibonacci) {
  let first = 1;
  let second = 1;
  let temp;
  const list = [];

  while (list.length < NumberOfEventFibonacci) {
    temp = first;
    first = second;
    second += temp;
    if (second % 2 === 0) list.push(second);
  }
  return list.reduce((previous, value) => previous + value);
};
