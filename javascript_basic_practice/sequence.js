/**
 * Assume an array of random 0's and 1's:
 * [1,1,1,0,0,1,0,1,1,0]
 * Write a function to return true or false if the sequence is valid.
 * The sequence is valid as follows:
 * 1. 1 represents pushing onto a stack, 0 represent popping off the stack
 * 2. The sequence is invalid if you pop on an empty stack.
 *
 * Examples:
 * [1,1,0,0] is valid and should return true
 * [0,1,1,0] is invalid because you have nothing on the stack on the first pop
 * [1,0,0,1] is invalid because the second 0 pops an empty stack
 *
 */


/**
 * Assume an array of random numbers and size:
 * [1,2,3,4,6,7,8,9,0,3,4,5,5,6,7]
 * Write a function to return whether all pairs of numbers are in sequence.
 * 1. The second number in the pair is the first number +1.
 * 2. The numbers between pairs do not have to be in sequence.
 *
 * Examples:
 * If 1,2 is a pairing, then it is valid,
 * If 1,3 is a pairing, then it is invalid, because 3 is not 1+1.
 *
 * [1,2,7,8] is valid and should return true
 * [7,8,2,3] is valid and should return true
 * [1,3,4,6,7,9] is invalid because 1,3, is an invalid pair.
 * [1] is invalid because the first pair is incomplete.
 */

/** 
 * 
 * 
 * 
 * dummy logic before actual logic 
let myArray = [1, 2, 3, 4, 6, 7, 8, 9, 0, 3, 4, 5, 5, 6, 7];

let newArray = [];
myArray.forEach((element, idx) => {
    if ((idx + 1) % 2 == 0) {
        newArray.push([myArray[idx - 1], element])
    }
});

console.log("New Array Is:", newArray);

let isValidSequence = true;
newArray.forEach((subArray, idx) => {
    if (subArray[1] !== subArray[0] + 1) {
        isValidSequence = false;
    }
});
console.log("IS VALID SEQUENCE::", isValidSequence);
*/

const checkIsValidSequence = (sequence) => {
    if (sequence && Array.isArray(sequence) && sequence.length) {
        let isValidSequence = true;
        sequence.forEach((_, idx) => {
            if ((idx + 1) % 2 == 0) {
                if (sequence[idx] !== (sequence[idx - 1] + 1)) {
                    isValidSequence = false;
                }
            } else if (!sequence[idx + 1]) {
                isValidSequence = false;
            }
        });
        return isValidSequence;
    }
}

console.log("CHECK VALID SEQUENCE::", checkIsValidSequence([0, 1]))
