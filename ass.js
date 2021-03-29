class Kiosk {
    constructor(fruits){
    this.fruits = fruits || [];
    }
    addFruit(fruit) {
    this.fruits.push(fruit);
    }
    setFruit(fruit) {
        this.addFruit(fruit);
    }
    getFruits() {
        return this.fruits;
    }
    }
    var kiosk = new Kiosk(['Mango']);
    kiosk.setFruit("orange")
    console.log(kiosk.getFruits());