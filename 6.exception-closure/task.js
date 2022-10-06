// task 1

function parseCount(value) {
    let number = Number.parseInt(value);

    if (Number.isNaN(number)) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

//task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if ((a + b) < c || (a + c) < b || (c + b) < a )  {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        let getArea = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        return +getArea.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter: function() {
                return "Ошибка! Треугольник не существует";
            },
            getArea: function() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}

