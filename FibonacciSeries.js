// Print fibonacci series
// 1,1,2,3,5,8...n


function printFibo(n){
     let series = [0,1];

    for(let i=2; i<=n;i++){
          const value = series[i-2] + series[i-1];
          series.push(value);
    }
        return series;
}

console.log(printFibo(10));
