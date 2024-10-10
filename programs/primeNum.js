//To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime. 
function isPrime(n) {
    if(n <= 1) {
        return false;
    };
    for (let i=2; i <= n/2; i++){
        if(n%i === 0){
            return false;
        };
    };
    return true;
};
console.log(isPrime(19));

function primeNumbers(n) {
    let nums = [];
    let num = 2;
    while(nums.length < n) {
        if (isPrime(num)) {
            nums.push(num);
        }
        num++
    }
    return nums;
};
console.log(primeNumbers(10))

function isPrimeWithSqrt(n) { //more efficient less loop iteration
    if(n <= 1) {
        return false;
    };
    for (let i=2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        };
    };
    return true;
};
console.log(isPrimeWithSqrt(15));
