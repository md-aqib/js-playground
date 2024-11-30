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
