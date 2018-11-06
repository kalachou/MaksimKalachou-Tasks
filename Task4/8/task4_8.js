module.exports = function isPalindrome(arg) {
  return !arg.split('')
    .filter(x => x.match(/[А-яA-z0-9]/))
    .reduce((previous, value, index, array) => (
      (value.toLowerCase() === array[array.length - 1 - index].toLowerCase())
        ? previous
        : previous + 1),
    0);
};
