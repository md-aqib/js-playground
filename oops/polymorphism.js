/* The ability for different objects to use the same method name but behave differently. */

class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}
const shapes = [new Shape(), new Circle()];
shapes.forEach(shape => shape.draw());
// Output:
// Drawing a shape
// Drawing a circle
