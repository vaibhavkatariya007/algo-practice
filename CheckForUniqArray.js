// check Array is uinq or not
const arr = [1,1,3,3,5,5,7,8,2,4];

// function checkUniqArr(arr){
//     let uniq = true;
//     for(let i = 0; i<arr.length; i++){
//         let firstIndex = arr.indexOf(arr[i]);
//         let lastIndex = arr.lastIndexOf(arr[i]);

//         if(lastIndex>firstIndex){
//             uniq = false;
//             break;
//         }
//     }
//     return uniq;
// }

//  Time complexity - O(n*n);


function checkUniqArr(arr){
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){

            return false;
        }else{
            obj[arr[i]] = arr[i];
        }
    }
    return true;
}
//  Time complexity - O(n);
console.log(checkUniqArr(arr));

