class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(geometricFigure){
    if (geometricFigure instanceof Circle){
      return 3.14159265359 * (circle.radius ** 2)
    }
    if(geometricFigure instanceof Rectangle){
      return rectangle.width * rectangle.height
    }
    if (geometricFigure instanceof Square){
      return square.side * square.side
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));