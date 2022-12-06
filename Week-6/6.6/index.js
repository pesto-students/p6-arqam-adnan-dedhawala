const threeSum = (arr, targetSum) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let closeToTarget = 1000000000;
  for (let i = 0; i < sortedArr.length - 2; i++) {
    let l = i + 1;
    let r = arr.length - 1;
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if (
        Math.abs(1 * targetSum - sum) < Math.abs(1 * targetSum - closeToTarget)
      ) {
        closeToTarget = sum;
      }
      if (sum > targetSum) r--;
      else l++;
    }
  }
  return closeToTarget;
};

console.log(threeSum([-1, 2, 1, -4], 1));
