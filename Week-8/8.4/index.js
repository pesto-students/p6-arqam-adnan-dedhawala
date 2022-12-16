const getAdjacencyArr = (edges) => {
    let result = {};
    for(let edge of edges) {
        result[edge[0]]?result[edge[0]].push(edge[1]):result[edge[0]]=[edge[1]]
        result[edge[1]]?result[edge[1]].push(edge[0]):result[edge[1]]=[edge[0]]
    }
    return result
}

const validPath = (n, edges, source, destination) => {
    const visited = [];
    let ajList = getAdjacencyArr(edges);

    const stack = [source];
    visited[source] = true;
    while(stack.length){
        let current = stack.pop();
        if(current === destination) return true;
        for(let element of ajList[current]){
            if(!visited[element]){
                stack.push(element);
                visited[element]=true
            }
        }
    }
    return false
}

console.log(validPath(3,[[0,1],[1,2],[2,0]],0,2))