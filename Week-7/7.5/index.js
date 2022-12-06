const findNextGreaterElement = arr => {
  let elementStack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (
      elementStack.length > 0 &&
      elementStack[elementStack.length - 1] < arr[i]
    ) {
      elementStack.pop();
    }
    if (elementStack.length === 0) {
      elementStack.push(arr[i]);
      arr[i] = -1;
    } else {
      let temp = arr[i];
      arr[i] = elementStack[elementStack.length - 1];
      elementStack.push(temp);
    }
  }
  return arr;
};

console.log(findNextGreaterElement([4, 5, 2, 25]));
console.log(findNextGreaterElement([6, 8, 0, 1, 3]));
console.log(findNextGreaterElement([1, 3, 2, 4]));
