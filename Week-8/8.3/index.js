const { createTree } = require("../utils/index.js");

const levelOrderTraversal = arr => {
  let root = createTree(arr);
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let node = queue.shift();
    if(node.value !== null)console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};

levelOrderTraversal([3, 9, 20, null, null, 15, 7]);
console.log("------------------------")
levelOrderTraversal([
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
