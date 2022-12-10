// A First Class Decorator

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const p = new Person();
console.log(p);
