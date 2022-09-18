//Check for balanced brrackets
// {[({()})]}

//const strValue = '(){}[]';
const strValue = '{[({[]})]}';
const braces = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
};
// function checkBracketBalance(str){
//     const len = str.length;
//     const mid = Math.floor(len/2);
//     let j = 1;
//     let isValid = false;
//     for(let i=mid; i<len; i++){
//         if(braces[str[mid-j]] === str[i]){
//             isValid= true
//         }else{
//             isValid = false;
//             break;
//         }
//         j++;
//     }
//     return isValid;
// }

// Time Complexity: O(n)

// console.log(checkBracketBalance(strValue));

const isValidStr = (str) => {
        let s = str.replace(/\s+/g, '');
        if (s.length % 2 !== 0) return false;
    // it's like execution stack    
    const stack = [];
    // const map = new Map([
    //     ['(',')'],
    //     ['[',']'],
    //     ['{','}']
    // ]);
    // map.has // map.get // we can use instead
    for (let i = 0; i < s.length; i++) {
        if(braces.hasOwnProperty(s[i])){
            stack.push(braces[s[i]]);
        }else if(s[i] !== stack.pop()){
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValidStr(strValue));