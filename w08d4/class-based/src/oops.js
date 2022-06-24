class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }
  area(){
    return this.length * this.width;
  }
}

// const r1 = new Rectangle(2,3);
// const r2 = new Rectangle(3,4);
// console.log('r1', r1);
// console.log('r1.area()', r1.area());

class Box extends Rectangle {
  constructor(length,width,height){
    super(length,width);
    this.height = height;
  }
  volume(){
    return this.area() * this.height;
  }
}

const b1 = new Box(2,3,5);
console.log('b1',b1);
console.log('b1.volume()',b1.volume());
