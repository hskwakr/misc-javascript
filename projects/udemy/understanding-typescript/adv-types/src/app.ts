// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee;

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// type guard 1
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

// type guard 2
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privilegese: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// // type guard with class 1
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadCargo" in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }

// type guard with class 2
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Descriminated Unions
// example 1
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 1 });
// moveAnimal({ type: "bird", runningSpeed: 10 }); // error

// Type Casting

// const paragraph = document.querySelector("p");
// const paragraph = document.getElementById("message-output");

// const userInputElement = document.getElementById("user-input");
// if (userInputElement) {
//   userInputElement.value = "Hi there!"; // error
// }

// // example 1
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// userInputElement.value = "Hi there!"; // ok

// // example 2
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// userInputElement.value = "Hi there!"; // ok

// example 3
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!"; // ok
}
