// const userName = "Max";
// userName ="Maximilian" // error

// let age = 30;
// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// result = 1; // error

// if (age > 20) {
//   var isOld = true;
// }
// isOld = false; // can access

// if (age > 20) {
//   let isOld = true;
// }
// isOld = false; // error

// const add = (a: number, b: number) => {
//   return a + b;
// };
// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(1));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
// console.log(activeHobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };
// console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 10, 2, 3.7);
// console.log(addNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// console.log(hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;
console.log(userName, age);
