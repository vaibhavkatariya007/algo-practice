let arOfObj = [
    {
        productName: "Abc",
        price: 123,
    },
    {
        productName: "Xyz",
        price: 146,
    },
    {
        productName: "Pqr",
        price: 180,
    }
];


const totalPrice = arOfObj.reduce((acc, current) => ({ price: acc?.price + current?.price }), { price: 1 });

console.log("TOTAL PRICE::", totalPrice);