//Js Interview Questions:

/**
 * // Q1: Difference b/w var and let
 * var was from the begning.It has function scope
 * 
 * let was intrroduced in ES2015/ES6. It has block scope
 * 
 * 
 * 
 * //Q2: Difference b/w == and ===
 * Both are comparison operators, the diff is === check for dataType as well
 * 
 * 
 * Q3: Diff b/w let and const
 * 
 * Q4: Diff b/w null and undefined
 * 
 */


// Important Question::

// Nested regular function "this" keyword refers to Window object,
// but if we use insted of regular function a arrow func, it will have
// the access its parent scope

const profile = {
    firstName: '',
    lastName: '',
    setName: function (nameString) {
        let splitName = (nString) => {
            // console.log("THIS:", this);
            let nameArray = nString.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(nameString);
    }
};

profile.setName('vaibhav katariya');
console.log("FIRST NAME:", profile.firstName);
console.log("LAST NAME:", profile.lastName);


// 