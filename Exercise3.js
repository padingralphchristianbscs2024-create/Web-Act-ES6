class car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    
    } greet(){
        return `I drive a car made by ${this.make} and the model is ${this.model} and the year of the car is ${this.year}`;
    }
}

        const myCar = new car("Lamborghini","Aventador", 2021);
        console.log(myCar.greet());
