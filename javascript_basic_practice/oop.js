function Car(color) {
    this.color = color;
};


Car.prototype = {
    getColor() {
        return this.color;
    }
};

function ToyCar(color, forKids) {
    Car.call(this, color);
    this.forKids = forKids;
}

ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.constructor = ToyCar;

const legoCar = new ToyCar("red", true);
console.log("LEGO CAR COLOR", legoCar.getColor());
console.log("IS FOR KIDS:", legoCar.forKids);
console.log(legoCar instanceof Car);



/// Another method of inheritance

let Toyota = {
    drive() {
        return 'Driving Toyota';
    }
};

let Camry = {
    drive() {
        return `${super.drive()} Camry`;
    }
};


Object.setPrototypeOf(Camry, Toyota);


console.log(Camry.drive());