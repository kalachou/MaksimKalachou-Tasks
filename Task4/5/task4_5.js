module.exports = function getAverageValue(inputArray) {
  return inputArray.reduce((previous, current) => previous + current) / inputArray.length;
};
