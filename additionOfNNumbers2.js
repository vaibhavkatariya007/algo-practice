function addUp(n) {
   return n * (n-1)/2;
}

console.log(addUp(5000000000));
const t1 = performance.now();
addUp(5000000000);
const t2 =  performance.now();

console.log(`Time Taken: ${(t2-t1)/1000} seconds`);
