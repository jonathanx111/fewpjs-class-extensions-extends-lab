// Your code here
class Polygon {
    constructor(intArraySides) {
        this.sides = intArraySides
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        if(!Array.isArray(this.sides)) return; 

        let sum = 0 
        for(let int of this.sides) {
            sum += int
        }

        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(!Array.isArray(this.sides)) return;
        if(this.count !== 3) return;

        let [side1, side2, side3] = this.sides 

        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1))

    }
}

class Square extends Polygon {
    get isValid(){
        if(!Array.isArray(this.sides)) return;
        if(this.count !== 4) return;

        let [side1, side2, side3, side4] = this.sides 

        return ((side1 === side2) && (side2 === side3) && (side3 === side4))
    }

    get area() {
        if(this.isValid) {
            return this.sides[0] ** 2
        } else {
            return false
        }
    }
}

