const getContigousSubArray = arr => {
  // value is detemined by the lowest limit
  let maxSum = -1000;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    if (maxSum < currentSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
};

console.log(getContigousSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// here logic is to maintain current sum and max sum if maxsum < currentsum update maxsum and if currentsum is less than 0 than make currentsum 0 (this is to start a new array)
