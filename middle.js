const middle = function (arr) {
  let result = [];
  // to get the index of the mid number
  let mid = arr[Math.floor(arr.length / 2)];

  if (arr.length <= 2) {
    return result;
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    result.push(mid - 1);
    result.push(mid);
  }
  if (arr.length > 2 && arr.length % 2 !== 0) {
    result.push(mid);
  }
  return result;
};

module.exports = middle;
