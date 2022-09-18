// arrange rrandom 1's and 0's on either side

const arr = [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];

console.log("ARRANGE::", arr.sort());

// find smallest and largest alphabet;
const str = "my name is khan";

const newArr = str.split('').sort().filter(val => val.trim());

console.log("NEW ARRAY:", newArr);
console.log("Min Alphabet:", newArr[0]);
console.log("Max Alphabet:", newArr[newArr.length - 1])

// Reverse string
console.log("REVERSE STRING:", str.split('').reverse().join(''));


// Numeric Problem::
const numArray = [1, 3, 3, 4, 5, 7, 8, 99, 8, 5, 35, 68, 1, 3, 2, 2, 34, 4, 56, 1, 2, 3];

// Find which number is repeating how many times;
const data = numArray.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] += 1 : 1;
    return acc;
}, {});
console.log("DATA::", data);