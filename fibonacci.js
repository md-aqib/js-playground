//using while loop
function fib(n) {
    let fibo = [0, 1];

    while(fibo[fibo.length -1] + fibo[fibo.length -2] <= n) {
        nextfib = fibo[fibo.length -1] + fibo[fibo.length -2];
        fibo.push(nextfib);
    }
    return fibo;
};
console.log(fib(50));

//using for loop
function fib(n) {
    let fibo = [0,1];
    let nextfib = 1;
    for(let i=0; i <= n; i++){
        if(fibo[fibo.length -1] + fibo[fibo.length -2] >= n) {
            break;
        };
        nextfib = fibo[fibo.length -1] + fibo[fibo.length -2];
        fibo.push(nextfib);
    };
    return fibo;
};
console.log(fib(50))