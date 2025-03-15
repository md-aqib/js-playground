class Car {
    constructor(model, price) {
      this.model = model;
      this.price = price;
    }
  }
  
  class CarFactory {
    createCar(type) {
      if (type === "Sedan") return new Car("Sedan", 30000);
      if (type === "SUV") return new Car("SUV", 50000);
    }
  }
  
  const factory = new CarFactory();
  const myCar = factory.createCar("SUV");
  console.log(myCar); // { model: 'SUV', price: 50000 }
  