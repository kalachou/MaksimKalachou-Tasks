module.exports = function getMaxValue(arr) {
  return arr.reduce((previous, current) => (current > previous ? previous = current : previous));
};
