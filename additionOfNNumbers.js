function addUp(n) {
    let total =0;
    for(let i=0; i<=n; i++){
        total += i;
    }
    return total;
}

console.log(addUp(5000000000));
const t1 = performance.now();
addUp(5000000000);
const t2 =  performance.now();

console.log(`Time Taken: ${(t2-t1)/1000} seconds`);
