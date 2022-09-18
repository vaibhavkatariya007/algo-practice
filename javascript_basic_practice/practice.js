/* function x(){
setTimeout(()=>{
console.log(i);
});
var i = 10;
};

x();
 */


// Recurssion Problem

const res = [
    {
        name: "Menu 1",
        link: '',
        subItems: [
            { name: "M1" },
            { name: "M2" }
        ]
    },
    {
        name: "Menu 2",
        subItems: [
            {
                name: "M3",
                subItems: [
                    {
                        name: "M4",
                        subItems: [
                            { name: "MM1" },
                            {
                                name: "MM2",
                                subItems: [
                                    {
                                        name: "MMM1"
                                    },
                                    {
                                        name: "MMM2"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// create a list of name
// o/p: ["Menu 1","M1", "M2", "Menu 2", "M3", "M4"]

function createFlatlist(list) {
    const names = [];
    function getNames(arrayOfObjects) {
        arrayOfObjects.forEach(obj => {
            if (obj.name) {
                names.push(obj.name);
            }
            if (obj.subItems) {
                getNames(obj.subItems);
            }
        });
    }
    getNames(list);
    return names;
}

console.log("NAMES LIST:", createFlatlist(res));