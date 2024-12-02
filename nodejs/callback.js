/* A callback in JavaScript is a function passed as an argument to another function */

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Alice", sayBye);
// Output:
// Hello, Alice!
// Goodbye!


function abc(sum) {
    return sum(2, 3)
}
function sum(a,b) {
    return a + b;
}
console.log(abc(sum))