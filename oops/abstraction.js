/* Hiding complex implementation details and showing only essential features. In JavaScript, this is often achieved using methods or abstract base classes. */

class Vehicle {
    start() {
        console.log("Starting the vehicle...");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Starting the car...");
    }
}
const car = new Car();
car.start(); // Starting the car...
