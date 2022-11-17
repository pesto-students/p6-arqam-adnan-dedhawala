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

  while (spiralArr.length < spiralArrLength) {
    spiralArr.push(arr[currentHeight][currentLength]);

    switch (arrDirection) {
      case direction.RIGHT:
        currentLength++;
        break;
      case direction.LEFT:
        currentLength--;
        break;
      case direction.DOWN:
        currentHeight++;
        break;
      case direction.UP:
        currentHeight--;
        break;

      default:
        break;
    }

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

let finalarr = getSpiralOrder([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
]);

console.log("resultarr", finalarr);
