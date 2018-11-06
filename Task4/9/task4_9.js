module.exports = function getSumDigits(input) {
  return (`${input}`)
    .split('')
    .map(x => +x)
    .reduce((accumulator, current) => accumulator + current);
};
