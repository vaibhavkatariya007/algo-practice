//Find the missing number in a given integer array of 1 to 10
// Assuming list is sorted
let list = [ 1,2,4,5,6,7,8,10];
//o/p - 3,9


function findMissingNos(arr){
    let result = [];
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i]+1 !== arr[i+1]){
            result.push(arr[i] +1);
        }
    }
    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(findMissingNos(list));