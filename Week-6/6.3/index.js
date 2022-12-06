const sortZeroOneTwo = arr => {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroCount++;
    if (arr[i] === 1) oneCount++;
    if (arr[i] === 2) twoCount++;
  }

  for (let i = 0; i < zeroCount; i++) arr[i] = 0;
  for (let i = zeroCount; i < zeroCount + oneCount; i++) arr[i] = 1;
  for (let i = zeroCount + oneCount; i < zeroCount + twoCount + oneCount; i++)
    arr[i] = 2;

  return arr;
};

console.log(sortZeroOneTwo([0, 1, 0]));
