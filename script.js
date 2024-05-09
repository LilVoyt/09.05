class Shape {
    constructor(borderColor = 'black', backgroundColor = 'white') {
      this.borderColor = borderColor;
      this.backgroundColor = backgroundColor;
    }

    printColor() {
      console.log(`borderColor=${this.borderColor}`);
      console.log(`backgroundColor=${this.backgroundColor}`);
    }
  }
  class Rectangle extends Shape {
    constructor(borderColor, backgroundColor, width = 0, height = 0) {
      super(borderColor, backgroundColor);
      this.width = width;
      this.height = height;
    }
    calcArea() {
      console.log(`area = ${this.width * this.height}`);
    }
  }

  class Circle extends Shape{
    constructor(radius, borderColor = "white", backgroundColor = "black"){
        super(borderColor, backgroundColor);
        this.radius = radius;
    }
    calcArea(){
        console.log(`area = ${Math.PI * this.radius * 2}`)
        return Math.PI * this.radius * 2;
    }
  }

  const shape = new Shape();
  const rectangle1 = new Rectangle('red', 'blue', 4, 6);
  console.log(rectangle1);
  rectangle1.calcArea();
  rectangle1.printColor();

  const circle = new Circle(3);
  circle.calcArea();
  