const getPairDifference = (arr, diffValue) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let l = 0;
  let r = 1;
  let size = arr.length;

  let hasPair = false;
  while (l <= r && r < size) {
    let diff = sortedArr[r] - sortedArr[l];
    if (diff === diffValue && l !== r) {
      hasPair = true;
      break;
    } else {
      if (diff > diffValue) l++;
      else r++;
    }
  }
  return hasPair ? 1 : 0;
};

console.log(getPairDifference([-10, 20], 30));
