// Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

const list = [1,2,3,4,6,7,8,9];

//Find the possible pairs 
// if target 9, [[6,3],[7,2],[8,1]]
/**
Dry Run
9-1 = 8;
9-2 = 7;
9-3 = 6;
9-4 = 5;
9-6 = 3;
9-7 = 2;
9-8 = 1;
9-9 = 0;
[[6,3],[7,2],[8,1]]
{1:1, 2:2,3:3,4:4}

The strategy here is, 
stroring the no. in hash, and verify with the diff of target and current no, 
if diff is already stored in hash means we have pair, the diff and current no
diff = target - current;
target = diff + current;
*/


function findPossiblePairs(list, target){
    let resultList = [];
    let hash = {};
    list.forEach(item=> {
    let diff = target-item;
    if(hash[diff] !== undefined){
        resultList.push([item,diff])
    }
        hash[item] = item; 
    });
    return resultList;
}


// Time Complexity: O(n)
console.log(findPossiblePairs(list,12));