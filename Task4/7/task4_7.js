module.exports = function getUniqueValues(arr) {
  const result = [];
  while (arr.length) {
    result.push(arr[0]);
    arr = arr.filter(x => x !== result[result.length - 1]);
  }
  return result;
};
