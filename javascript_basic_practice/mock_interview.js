//

// [1, 2].print() //o/p 1,2

Array.prototype.print = function () {
    console.log(this);
    return this.toString();
}

console.log([1, 2].print());

//
let a = function (x) {
    this.x = x;
};

a.prototype = {
    getX() {
        return this.x;
    }
};


let b = function (x, y) {
    // need to call above constructor 
    a.call(this, x);// need to add
    this.y = y;
}

b.prototype = a.prototype;
b.prototype.getY = function () {
    return this.y;
}

const obj = new b("vaibhav", "katariya");
console.log(obj);
console.log(obj.getX());
console.log(obj.getY());
//o/p: {
//     x: 'some value',
//         y: 'some value'
// }

const sourceObj = {
    a: {
        b: {
            c: 1,
            d: {
                e: {
                    f: 5
                }
            }
        }
    },
    g: 3,
    h: {
        i: 7
    }
};


function deepCloning(obj) {
    let clonedObj = {};
    function cloneObj(obj) {
        console.log("Received Object::", obj);
        Object.keys(obj).forEach((key, i) => {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                console.log(key);
                cloneObj(obj[key]);
            } else {
                // How to copy into nested level// Problem
                clonedObj[key] = obj[key];
            }
        });
    }
    cloneObj(obj);
    return clonedObj;
}
console.log("DeepCloning::", deepCloning(sourceObj));

//const cloneObj = Object.assign({}, sourceObj);
// This will allow to modify the Value
// cloneObj.a.b.c = 2;

// console.log(sourceObj.a.b.c);


// Problem called is deep cloning
// 1. write some recursive method to copy entire obj
// 2. sol
const cloneNewObj = JSON.parse(JSON.stringify(sourceObj));

cloneNewObj.a.b.c = 2;
console.log(sourceObj.a.b.c);