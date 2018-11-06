module.exports = function getMaxValue(inputArray) {
  return inputArray.reduce((previous, current) => (current > previous ? previous = current : previous));
};
