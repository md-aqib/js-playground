/* A way to create new classes based on existing ones, inheriting properties and methods. */

class Animal {
    eat() {
        console.log("This animal eats food.");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.eat(); // This animal eats food.
dog.bark(); // Woof!
