//Find the missing number in a given integer array of 1 to 10
// Assuming list is sorted
//let list = [1,2,4,5,6,7,8,10];
//o/p - 3,9


// function findMissingNos(arr){
//     let result = [];
//     for(let i = 0; i<arr.length-1; i++){
//         if(arr[i]+1 !== arr[i+1]){
//             result.push(arr[i] +1);
//         }
//     }
//     return result;
// }

// Time Complexity: O(n)
// Space Complexity: O(n)

// console.log(findMissingNos(list));

// Find the missing number from unsorted array with O(n) complexity

let list2 = [2,7,5,1,4,3,6];

function findMissingNosFromUnsorted(arr){
    let len = arr.length;
    let sum = 1;

    for (let i = 2; i <=(len+1); i++){
        sum = sum + i;
        sum = sum - arr[i-2];
    }
    return sum;
}


/**
Dry run
len = 7;
sum =1;

i =2,

sum = 1 + 2;
sum = 3 - 2;

sum = 1
i = 3
sum = 1 + 3;
sum = 4 - 7;

sum = -3;
i = 4;

sum = -3 + 4;
sum = 1 - 5

sum = -4;
i=5;

sum = -4 + 5;
sum = 1 - 1;

sum = 0;
i= 6;

sum = 0 + 6;
sum = 6 - 4;

sum = 2;
i=7;

sum = 2 + 7;
sum = 9 - 3;

sum = 6;
i=8;

sum = 6 + 8;
sum = 14 - 6;

sum = 8
i=9;

stop

// Missing Value is : 8;
*/
console.log(findMissingNosFromUnsorted(list2));