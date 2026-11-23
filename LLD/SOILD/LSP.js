// Liskov Substitution Principle (LSP)
// SOLID · Principle 3 of 5
// 1. Concept first
// Definition:
// Objects of a child class should be replaceable with objects of their parent class without breaking the expected behavior of the program.

// In simple words, if a child class inherits from a parent, it should behave in a way that doesn't break the functionality expected from that parent.

class Shape {
  calculateArea() {
    throw new Error("calculateArea() must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

// Common function that works with any Shape
function printArea(shape) {
  console.log(`Area: ${shape.calculateArea()}`);
}

// Create objects
const rectangle = new Rectangle(10, 5);
const square = new Square(5);

// Test both shapes
printArea(rectangle); // Area: 50
printArea(square); // Area: 25
