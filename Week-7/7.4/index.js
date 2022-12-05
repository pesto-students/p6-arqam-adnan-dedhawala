class Stack{
    constructor(){
        this.valStack = []
    }

    add = (val)=>{
        this.valStack.push(val)
    }

    remove = ()=>{
        this.valStack.pop()
    }

    getTopElement=()=>{
        return this.valStack[this.valStack.length-1]
    }
}

const bracketsMap = new Map();
bracketsMap.set("}","{")
bracketsMap.set(")","(")
bracketsMap.set("]","[")


const checkParenthesis = (str)=>{
    let flag =true
    const bracketStack = new Stack();

    for(let i=0;i<str.length;i++){
        if(str[i]==="{"||str[i]==="("||str[i]==="["){
            bracketStack.add(str[i])
        }else{
            let topBracket = bracketStack.getTopElement();
            if(bracketsMap.get(str[i])===topBracket){
                bracketStack.remove()
            }else{
                flag=false;
                break;
            }
        }
    }

    return flag
}

console.log(checkParenthesis("[(])"))