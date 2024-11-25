/*
An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits raised to the power of the number of digits.

For example:
153 = 1³ + 5³ + 3³
9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴
*/

function isArmstrongNumber(number) {
    const digits = number + "";
    const power = digits.length;
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(+digits[i], power)
    }    
    return sum === number;
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(123)); // false

