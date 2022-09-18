//1:
console.log([] + []);

// It is same for console.log({} + []) or console.log({} + {})
// because +  try to do type conversion of []
// String([]);

// Ans : emptyString  + emptyString = emptyString


function a() {
    return 'hello';
}
// It is called tagged template
const msg = a`hi`;
console.log(msg);
// o/p: hello


// How make webpage editable
// <div contenteditable="true">test</div>

//

function y() {
    console.log(this.length);
};

let x = {
    length: 5,
    method: function (y) {
        arguments[0]();
    }
}

x.method(y, 1);
//O/P: 2 ,  because in y this refers to the arguments array

//
const m = 'constructor';
console.log(m[m](01));

x.constructor == String();

String(01);
//o/p = 01



function myFun(...args) {
    console.log("ARGUMENTS:", arguments);
    console.log("LENGTH IS:", Object.keys(arguments).length);
    // another way
    // it will convert the array like list into array
    console.log([].slice.call(arguments).length);
}

myFun(1, 2, 3, 4);


//
console.log(2 + "2"); //22
console.log(2 * "20");//4
console.log(2 - "2");//0
console.log(2 - "sdas");//NaN
console.log(NaN == NaN);// false
// because - applies to number and it typeCast "2" string into number;


let fun = function () {

    {
        let l = 'let'; // it will not be accessiable outside because of block scope 
        var v = 'var'; //  it is function scope not block scope
    }
    //console.log(l);
    console.log(v);
}
fun();

// how to stop var not to be accessible outside

let func = function () {

    {
        (function () {
            let l = 'let';
            var v = 'var';
        })();
    }
    //console.log(l);
    console.log(v);
}

console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5);// false

// left-to-right manipulation starts
// 5<6 = true
// true < 7 == true; true is replace with 1

const profile = {
    name: "vaibhav"
};


// how to stop user from adding new Properties
// Object.freeze(profile); // This will stop user from adding and modifying properties
// profile.age = 32;
// profile.name = "katariya";

// if I want my user to modify properrty but not add new once
Object.seal(profile);
profile.age = 32;
profile.name = "katariya";
console.log("Profile", profile);

// How i want my user only to modify some properties

// Object.defineProperty(profile, 'age', {
//     value: 32,
//     writeable: false
// });


// 
console.log(Math.max()) // -Infinity

// it will start comparison from the lowest math number, and nothing is less than -Infinity

console.log(0.1 + 0.2) // 0.30000000000004


//

const arr = [1, 2, 3];

arr[-1] = -4;

console.log(arr[arr.indexOf(1000)]);


const ary = [1, 2, 15, 45, 5, 54, 52, 12, 23, 4];

console.log(ary.sort());
//o/p [1, 12, 15, 2, 23,4, 4, 45, 5, 52,54]
// by default it will treat each element as a string

console.log(ary.sort((a, b) => a - b)); // ascending order
console.log(ary.sort((a, b) => a > b)); // ascending order
console.log(ary.sort((a, b) => b - a)); // descending order
console.log(ary.sort((a, b) => a < b)); // descending order


let i = Number.MIN_VALUE;
// in most cases it behave like a Zero
console.log(i * i); // 0
console.log(i + 1); // 1
console.log(i - 1); // -1
console.log(i / i); // 1

console.log([1, 2] + [3, 4]);

console.log(555555555555555555)
//o/p = 555555555555555600
// beyond 16 digit it won't allow , after 16 digits it convert to 0
//Number.MAX_SAFE_INTEGER :  because it allow 16 digit only