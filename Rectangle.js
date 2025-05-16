const Shape = require('./Shape');

class Rectangle extends Shape{
    side1;
    side2;
    constructor(shapeName, side1, side2){
        super(shapeName);
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea(){
        if (this.side1 === this.side2){
            return this.isSquare();
        }
        return this.side1 * this.side2;
    }

    isSquare(){
        if(this.side1 === this.side2){
            return true;
        }else{
            return false;
        }
    }
    
}

let rectangleOne= new Rectangle("Rectangle", 4, 4);
console.log(rectangleOne.getArea());
console.log(rectangleOne.isSquare());
console.log("The shape is a " + rectangleOne.get_shapeName());