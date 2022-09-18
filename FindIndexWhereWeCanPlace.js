//Find the Index where we can place the element or if number exist retrun the index;
// Assuming list is sorted
let list = [2,4,5,6,7,8,10];
//o/p - 3,9


function getIndex(arr, target){
// Edge Case Scenario
    // target is less than 0th index // retrun 0 OR if target greater than last idx return length
    const len = arr.length;
    if(target<arr[0] || !len){
        return 0;
    }
    if(target> arr[len-1]){
        return len;
    }
    for(let i = 0; i<len-1; i++){
        // if target found at particular index
        if(arr[i] === target){
            return i;
            break;
        }else if(arr[i]+1 !== arr[i+1]){
            // if target need to insert b/w two nos.
            if(target>arr[i] && target<arr[i+1]){
                return i+1;
                break;
            }
        }else{
            // if target is greater than all elements
           // return arr.length;
        }
    }
}

// Time Complexity: O(n)
// Space Complexity O(1)
console.log(getIndex(list,3));