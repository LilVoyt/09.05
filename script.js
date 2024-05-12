//Ex 1
// class Shape {
//     constructor(borderColor = 'black', backgroundColor = 'white') {
//       this.borderColor = borderColor;
//       this.backgroundColor = backgroundColor;
//     }

//     printColor() {
//       console.log(`borderColor=${this.borderColor}`);
//       console.log(`backgroundColor=${this.backgroundColor}`);
//     }
//   }
//   class Rectangle extends Shape {
//     constructor(borderColor, backgroundColor, width = 0, height = 0) {
//       super(borderColor, backgroundColor);
//       this.width = width;
//       this.height = height;
//     }
//     calcArea() {
//       console.log(`area = ${this.width * this.height}`);
//     }
//   }

//   class Circle extends Shape{
//     constructor(radius, borderColor = "white", backgroundColor = "black"){
//         super(borderColor, backgroundColor);
//         this.radius = radius;
//     }
//     calcArea(){
//         console.log(`area = ${Math.PI * this.radius * 2}`)
//         return Math.PI * this.radius * 2;
//     }
//   }

//   const shape = new Shape();
//   const rectangle1 = new Rectangle('red', 'blue', 4, 6);
//   console.log(rectangle1);
//   rectangle1.calcArea();
//   rectangle1.printColor();

//   const circle = new Circle(3);
//   circle.calcArea();


//Ex 2 
  function MyArray() {
    this.length = 0;
  }
  MyArray.prototype.push = function (...args) {
    for (const v of args) {
      this[this.length] = v;
      this.length++;
    }
    return this.length;
  }
  MyArray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  
  MyArray.prototype.filter = function (callback) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr.push(this[i]);
      }
    }
    return newArr
  }

  MyArray.prototype.pop = function (){
    let res = this[this.length];
    this.length -= 1;
    delete this[this.length];

    return res;
  }

  MyArray.prototype.some = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true; 
      }
    }
    return false; 
  }

  MyArray.prototype.every = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i])) {
        return false;
      }
    }
    return true;
  }

  MyArray.prototype.map = function(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }
  
  
  
//   const arr = new Array();
//   arr.push(11, 22, 33);
//   console.log(arr.push(44));
//   console.log(arr);
//   arr.forEach((value, index, arr) => console.log(value, index, arr));
//   const newArr = arr.filter((value) => value % 2 === 0);
//   console.log(newArr);
//   console.log(arr.length);
  
  const myArr = new MyArray();
  myArr.push(11, 22, 33, 44);
//   console.log(myArr.push(44));
//   console.log(myArr);
//   myArr.forEach((value, index, arr) => console.log(value, index, arr));
//   const newMyArr = myArr.filter((value) => value % 2 === 0);
//   console.log(newMyArr);
//   console.log(myArr.length);
  myArr.pop();

  console.log(myArr.length);
  console.log(myArr);
  myArr.push(55);

  console.log(myArr.every((element) => element < 40))
  console.log(myArr.some((element) => element > 60))