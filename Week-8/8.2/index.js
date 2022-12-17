const { createTree } = require("../utils/index.js");

let binaryTreeArr = [];

function inorder(root) {
  if (root !== null) {
    inorder(root.left); // Left
    if (root.value !== null) binaryTreeArr.push(root.value); //Root
    inorder(root.right); //Right
  }
}

const validateBST = arr => {
  const root = createTree(arr);

  inorder(root);
  let flag = true;
  for (let i = 0; i < binaryTreeArr.length - 1; i++) {
    if (binaryTreeArr[i] > binaryTreeArr[i + 1]) {
      flag = false;
      break;
    }
  }

  console.log(binaryTreeArr, flag);
  binaryTreeArr = [];
};

validateBST([6, 4, 8, 3, 5, 7, 9]);
validateBST([2, 1, 3]);
validateBST([7, 4, 8, null, null, 6, 9]);
validateBST([0]);
