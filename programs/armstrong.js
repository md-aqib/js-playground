/*
An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits raised to the power of the number of digits.

For example:
153 = 1³ + 5³ + 3³
9474 = 9⁴ + 4⁴ + 7⁴ + 4⁴
*/

function isArmstrongNumber(number) {
    const digits = number.toString().split(''); // Split number into digits
    const power = digits.length; // Get the number of digits
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    
    return sum === number; // Check if the sum equals the original number
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(123)); // false

