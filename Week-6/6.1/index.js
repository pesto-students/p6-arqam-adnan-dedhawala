const getContigousSubArray = arr => {
  // value is detemined by the lowest limit
  let maxSum = -1000;
  let currentSum = 0;
  let opArr = [];
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
      opArr.push(i);
    }
    if (currentSum < 0) {
      currentSum = 0;
      opArr = [];
    }
  }

  let seriesIndexes = getSequenceArr(arr, opArr[0], opArr[opArr.length - 1]);

  return { maxSum, seriesIndexes };
};

const getSequenceArr = (arr, start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }
  return result;
};

console.log(getContigousSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(getContigousSubArray([1, 2, 3, 4, -10]));

// here logic is to maintain current sum and max sum if maxsum < currentsum update maxsum and if currentsum is less than 0 than make currentsum 0 (this is to start a new array)
