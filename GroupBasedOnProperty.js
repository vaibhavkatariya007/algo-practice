// Group the users based on there age, role etc;


const users = [
    {
        name:"vaibhav",
        age: 32,
        role:"developer"
    },
      {
        name:"simran",
        age: 27,
        role:"tester"
    },
      {
        name:"meher",
        age: 2,
        role:"developer"
    },
];

/** 
output
{
developer:[{
        name:"meher",
        age: 2,
        role:"developer"
    },{
        name:"vaibhav",
        age: 32,
        role:"developer"
    }],
tester:[{
        name:"simran",
        age: 27,
        role:"tester"
    }]
}
*/


function groupUserByProperty(list,property){
    return list.reduce((acc, curr)=> {
        if(acc[curr[property]]){
            acc[curr[property]].push(curr);
        }else{
            acc[curr[property]] = [curr];
        }
        return acc;
    }, {});
}

console.log(groupUserByProperty(users,'role'));