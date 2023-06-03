class Vehicle {
    constructor(model) {
        this.model = model
    }
    drive() {
        return this.model + " " + "drives"
    }
}

class Sedan extends Vehicle()
