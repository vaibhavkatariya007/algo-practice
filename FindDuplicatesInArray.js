//Find a duplicate number in an array of integers

let list = [1,2,3,4,5,6,7,8,9,10];

function dupesList(arr){
    let dupes = [];
    let obj={};
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]){
            if(obj[arr[i]] === 1){
                dupes.push(arr[i]);
            }
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    if(dupes.length){
        return dupes;
    }
    return false;
}

// Time Complexity:  O(n)
console.log(dupesList(list));