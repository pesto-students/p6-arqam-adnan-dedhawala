const isVowel = (char)=>{
    return "aeiou".includes(char)
}

const vowelCount = (str)=>{
    const vowelMap = new Map();
    let formatedStr = str.toLowerCase();
    let charArr = formatedStr.split("");
    charArr.forEach(char => {
        if(isVowel(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char,vowelMap.get(char)+1)
            }else{
                vowelMap.set(char,1)
            }
        }
    });
    console.log(vowelMap)
}

vowelCount("Adnan is a rockstar")