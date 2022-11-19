const getMaxProfit = arr => {
  let min = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentProfit = arr[i] - min;
    if (currentProfit > maxProfit) maxProfit = currentProfit;
    if (arr[i] < min) min = arr[i];
  }

  return maxProfit;
};

console.log(getMaxProfit([7, 6, 4, 3, 1]));
