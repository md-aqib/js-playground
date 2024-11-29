/* Bundling related data and methods together into an object, keeping the internal details hidden and accessible only through public methods. */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person = new Person("Alice", 25);
person.greet(); // Hello, my name is Alice.
