const getMaxProfit = arr => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let start = arr.indexOf(min);
  let maxProfit = 0;
  while (start < arr.length) {
    if (arr[start] - min > maxProfit) {
      maxProfit = arr[start] - min;
    }
    start++;
  }

  return maxProfit;
};

console.log(getMaxProfit([7, 6, 4, 3, 1]));
