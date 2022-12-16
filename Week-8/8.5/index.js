const getAdjacencyArr = (n,edges) => {
    let trustObj = {};
    let beingTrustedObj = {};
    for(let i=1;i<=n;i++){
        trustObj[i]=0;
        beingTrustedObj[i]=0;
    }
    for(let edge of edges) {
        trustObj[edge[0]]++
        beingTrustedObj[edge[1]]++
    }
    return {trustObj,beingTrustedObj}
}

const findJudge = (n,edges) => {
    let {trustObj ,beingTrustedObj} = getAdjacencyArr(n,edges);
    let noTrustMember = undefined;
    for(let i of Object.keys(trustObj)){
        if(trustObj[i]===0) noTrustMember = i;
    }
    if(!noTrustMember) return -1
    if(beingTrustedObj[noTrustMember]===n-1) return noTrustMember
    return -1
}

console.log(findJudge(3,[[1,2],[2,3]]))
// console.log(findJudge(3,[[1,3],[2,3],[3,1]]))