// Function currying using bind method;
const multiply = function (x, y) {
    return x * y;
}

const multiplyByTwo = multiply.bind(this, 2);

console.log("Multiply By 2:", multiplyByTwo(5));

// Function currying using clousers;

function multiplyTest(x) {
    return function (y) {
        return x * y;
    }
}

const multiplyByTwoTest = multiplyTest(2);

console.log("MULTIPLY BY TWO:", multiplyByTwoTest(8));


// solve sum(1)(2)(3)...();

function sum(x) {
    return function (y) {
        if (y) {
            return sum(x + y);
        } else {
            return x;
        }
    }
}

console.log("Sum Is:", sum(1)(2)(4)());