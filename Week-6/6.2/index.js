const direction = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
  UP: "UP",
  DOWN: "DOWN"
};

const getSpiralOrder = arr => {
  let spiralArr = [];
  let spiralArrLength = arr[0].length * arr.length;

  let maxLength = arr[0].length - 1;
  let maxHeight = arr.length - 1;

  let minLength = 0;
  let minHeight = 0;

  let currentLength = 0;
  let currentHeight = 0;

  let arrDirection = direction.RIGHT;

  let directionOpsMap = {
    [direction.RIGHT]: () => currentLength++,
    [direction.LEFT]: () => currentLength--,
    [direction.DOWN]: () => currentHeight++,
    [direction.UP]: () => currentHeight--
  };

  while (spiralArr.length < spiralArrLength) {
    spiralArr.push(arr[currentHeight][currentLength]);

    directionOpsMap[arrDirection]();

    if (currentLength === maxLength && arrDirection === direction.RIGHT) {
      arrDirection = direction.DOWN;
      minHeight++;
    }
    if (currentLength === minLength && arrDirection === direction.LEFT) {
      arrDirection = direction.UP;
      maxHeight--;
    }
    if (currentHeight === maxHeight && arrDirection === direction.DOWN) {
      arrDirection = direction.LEFT;
      maxLength--;
    }
    if (currentHeight === minHeight && arrDirection === direction.UP) {
      arrDirection = direction.RIGHT;
      minLength++;
    }
  }

  return spiralArr;
};

let finalarr1 = getSpiralOrder([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
]);

let finalarr2 = getSpiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
console.log("resultarr", finalarr1);
console.log("resultarr", finalarr2);
