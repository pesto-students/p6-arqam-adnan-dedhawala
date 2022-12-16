var allPathsSourceTarget = function (graph) {
  const ans = [];

  const dfs = (id, result) => {
    console.log("input", id, result);
    if (id === graph.length - 1) {
      console.log("ans", result);
      ans.push(result);
    }

    for (const num of graph[id]) {
      console.log("num", num, graph[id], result);
      dfs(num, [...result, num]);
    }
  };

  dfs(0, [0]);

  return ans;
};

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
