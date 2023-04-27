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
      return 3.14159265359 * (circles.radius ** 2)
    }
    if(geometricFigure instanceof Rectangle){
      return rectangles.width * rectangles.height
    }
    if (geometricFigure instanceof Square){
      return squares.side * squares.side
    }
  }
}

const squares = new Square(4);
const rectangles = new Rectangle(4, 2);
const circles = new Circle(5);

console.log(AreaCalculator.calculate(squares));
console.log(AreaCalculator.calculate(rectangles));
console.log(AreaCalculator.calculate(circles));