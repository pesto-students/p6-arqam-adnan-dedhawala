const { createTree } = require("../utils/index.js");

const calculateHeight = root => {
  if (root === null) return 0;

  let leftHeight = calculateHeight(root.left);
  let rightHeight = calculateHeight(root.right);

  return Math.max(leftHeight + 1, rightHeight + 1);
};

const getMaximumDepthBT = arr => {
  let root = createTree(arr);

  console.log(calculateHeight(root));
};

getMaximumDepthBT([
  1,
  2,
  3,
  4,
  5,
  7,
  8,
  null,
  null,
  null,
  null,
  10,
  9,
  null,
  null,
  null,
  null,
  11,
  12
]);

getMaximumDepthBT([3, 9, 20, null, null, 15, 7]);
getMaximumDepthBT([1, null, 2]);
