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

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// // type guard 1
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }

//   return a + b;
// }

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

// useVehicle(v1);
// useVehicle(v2);

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

// moveAnimal({ type: "bird", flyingSpeed: 10 });
// moveAnimal({ type: "horse", runningSpeed: 1 });
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

// Index Properties

interface ErrorContainer {
  // { email: "Not a valid email", username: "Must start with a character"}
  // id: number; // error
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a character",
};

// Function Overloads

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// const result = add("Max", "Schwarz");
// result.split(" ");

const result1 = add(1, 2);
const result2 = add("Max", "Schwarz");
const result3 = add("Max", 10);
const result4 = add(32, "Schwarz");

// Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
// console.log(fetchedUserData?.job?.title);

// Nullish Coalescing

// const userInput = null;
// const storeData = userInput || "DEFAULT";
// console.log(storeData); // DEFAULT

// // want keep ""

// const userInput = "";
// const storeData = userInput || "DEFAULT";
// console.log(storeData); // DEFAULT

// const userInput = undefined;
// const storeData = userInput ?? "DEFAULT";
// console.log(storeData); // DEFAULT

const userInput = "";
const storeData = userInput ?? "DEFAULT";
console.log(storeData); // ""
