/** Intemediate Problem 1 **/
console.log(typeof foo); //function
var foo = "I'm a variable";
function foo() {
    console.log("I'm a function");
}
console.log(typeof foo); //string

/** Intemediate Problem 2 (Shadowing, with var or let) **/
var x = 20
function test() {
    console.log(x);
    var x = 10;
    console.log(x);
  }
test();

let foo = 1; //shadowing with block scope
{
    console.log(foo); // ReferenceError
    let foo = 2;
    console.log(foo); // ?
}
console.log(foo); // ?

function tricky(a) {
  console.log(a); // [Function: a]
  function a() {}
  console.log(a); // [Function: a]
}
tricky(5);

/** Intemediate Problem 3 **/
function example(x = y, y = 10) {
    console.log(x, y); // ReferenceError
}
example();

function outer(a = b(), b = () => 10) {
  console.log(a, b()); // ReferenceError
}
outer();

function mix(a, b = a, c = () => a) {
  a = 20;
  console.log(a) // 20
  console.log(b); // 10
  console.log(c()); // 20
}
mix(10);

/** Intemediate Problem 4 **/
if (false) {
  function test() {
      console.log("I'm a function");
  }
}
console.log(typeof test); //undefined when false or in strict mode with true, otherwise function

/** Intemediate Problem 5 **/
function example() {
  foo(); // Second
  function foo() {
      console.log("First");
  }
  function foo() {
      console.log("Second");
  }
  foo(); // Second
}
example();

/** Intemediate Problem 6 **/
let count = 0;
function increment(a = count++) {
    console.log(a);
}
increment(); // 0 because post inc first assigns then inc
increment(); // 1
console.log(count); // 2


/** Intemediate Problem 7(fake recursion) **/
function factorial(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
  function fact(x) {
      return x * 2;
  }
}
console.log(factorial(3)); // 12 (because it's not a recursion, it's a simple func hoisting)
