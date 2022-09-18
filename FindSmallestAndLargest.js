// Find the smallest and the largest element from unsoted list

const list = [8,4,6,1,7,22,33,11,32,534,66,555,121,423];


function findMinAndMax(arr) {
    let min=arr[0],
        max=arr[0];
    for(let i = 0; i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i];
        }else if(arr[i] > max){
            max = arr[i];
        }
    }
    return {
        min,
        max
    }
}

console.log(findMinAndMax(list));