/** Return an array showing the cumulative sum at each index of an array of integers
    let arr = [1,3,5,7];
    o/p =  [1, 4, 9, 16];
*/

let list = [1,3,5,7];

function getCumlativeList(arr){
   let cumSum = 0;
   return arr.map(el => {
       cumSum += el
       return cumSum;
   });
}


// Time Complexity = O(n)
console.log(getCumlativeList(list))