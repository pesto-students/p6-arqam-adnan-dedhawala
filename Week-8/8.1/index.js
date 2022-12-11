const setNode = (depth, left, right) => ({
  depth,
  left,
  right
});

const getDepth = (map, key) => {
  return map.get(key).depth;
};

const getNodeMap = arr => {
  let treeObj = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let leftValue = arr[leftIndex] ? arr[leftIndex] : null;
      let rightValue = arr[rightIndex] ? arr[rightIndex] : null;
      let newNode = setNode(0, leftValue, rightValue);
      treeObj.set(arr[i], newNode);
    }
  }
  return treeObj;
};

const getMaximumDepthBT = arr => {
  let nodeMap = getNodeMap(arr);
  let nodeArr = [...nodeMap.keys()];
  for (let i = nodeArr.length - 1; i >= 0; i--) {
    let temp = nodeMap.get(nodeArr[i]);

    if (temp.left === null && temp.right === null) {
      temp.depth = 1;
    } else {
      if (temp.left !== null && temp.right !== null) {
        temp.depth =
          1 +
          Math.max(getDepth(nodeMap, temp.left), getDepth(nodeMap, temp.right));
      } else if (temp.left !== null) {
        temp.depth =1+getDepth(nodeMap, temp.left)
      } else {
        temp.depth =1+getDepth(nodeMap, temp.right)
      }
    }
    nodeMap.set(nodeArr[i],temp)
  }

  console.log(getDepth(nodeMap,arr[0]))
};

getMaximumDepthBT([1,2,3,4,5,7,8,null,null,null,null,10,9,null,null,null,null,11,12]);
