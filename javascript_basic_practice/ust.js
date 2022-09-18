const arr = [1, 2, 3, 2, 4, 3, 1];

/** 1 Question:
Dummy logic (For dry run)
Find the SHortest distance
const UniqueArray = [...new Set(arr)];
console.log("UNIQUE ARRAY::", UniqueArray);
const LenArray = [];
UniqueArray.forEach(el => {
    const first_index = arr.indexOf(el);
    const last_index = arr.lastIndexOf(el);
    if (last_index > first_index) {
        return LenArray.push(last_index - first_index);
    }
});

const sortedArray = LenArray.sort();
console.log("Sorted  Array::", sortedArray[0]);
*/

// Clean Solution
const findShortestDistance = (list) => {
    if (list && Array.isArray(list) && list.length > 1) {
        const distanceArray = [];
        [...new Set(list)].forEach(el => {
            const firstIndex = list.indexOf(parseInt(el));
            const lastIndex = list.lastIndexOf(parseInt(el));
            if (lastIndex > firstIndex) {
                distanceArray.push(lastIndex - firstIndex);
            }
        });
        return distanceArray.sort()[0];
    }
}

console.log("SHORTEST LENGTH::", findShortestDistance(arr));


/** 2 Question::  */
const num = 1876;
//o/p like = One-Eight-Seven-Six
const numericWords = {
    0: "ZERO",
    1: "ONE",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    ".": "dot"
}

function convertNumberToWords(num) {
    if (num && typeof num === 'number') {
        const STR = String(num);
        let numWordFormat = '';
        STR.split('').forEach((digit, i) => {
            const isExceed = (i == STR.length - 1);
            numWordFormat += `${numericWords[digit]}${!isExceed ? '_' : ''}`
        })
        return numWordFormat;
    }
}
console.log("Number Word Format::", convertNumberToWords(num));

/** 3 Qestion:: */
//write tHe api to fetch user info,

// user send token 'Bearer token',

//user

// Auth MiddleWare
const checkAuth = (req, res, next) => {
    const token = res.headers['Authorization'],
    const { userId } = jwt.verify(token.split('')[1], secret);
    if (userId) {
        req.userId = userId;
        next();
    } else {
        return res.status(500).json({
            error: 'Not Authorized'
        })
    }
}

app.get('/user', checkAuth, async (req, res) => {
    try {
        const user = await user.find({
            id: req.userId
        });
        if (user) {
            res.status(200).json({
                user
            })
        }
    } catch (error) {
        res.status(500).json({
            error: error?.message || 'something went wrong'
        })
    }

});
app.use('NOT_FOUND_MIDDLEWARE');


/** MySql Qestion
You are having "Users Table" with following Columns
    name
    email
    gender
    Question: u need to swap the gender values with any technique
*/
// Solution Is:
// Use Swapping technique
// UPDATE users SET gender = 'temp' WHERE gender = "female";
// UPDATE users SET gender = 'female' WHERE gender = 'male';
// UPDATE users SET gender = 'male'  WHERE gender = 'temp';



