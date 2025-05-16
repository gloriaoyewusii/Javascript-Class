class Shape{
    #shapeName;

    constructor(shapeName){
        this.#shapeName = shapeName;
    }
    set_shapeName(shapeName){
        this.#shapeName = shapeName;
    }

    get_shapeName(){
        return this.#shapeName;
    }

}

module.exports = Shape;

let shapeOne = new Shape("Rectangle");
console.log(shapeOne);
console.log(shapeOne.get_shapeName());