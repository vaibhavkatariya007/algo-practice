// check the which character is occurring more than once

let str = "Hello, Vaibhav!";

function findRepeatingCharSet(str){
    let result = [];
    let obj = {};
    for(let char of str){
        char = char.toLowerCase();
        if(obj[char]){
            if(obj[char] === 1){
                result.push(char);
            }
            obj[char] += 1;
        }else{
            obj[char] = 1;
        }
    }
    return {result, obj};    
}


//Time Complexity: O(n)
console.log(findRepeatingCharSet(str));