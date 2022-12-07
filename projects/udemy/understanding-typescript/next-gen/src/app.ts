const userName = "Max";
// userName ="Maximilian" // error

let age = 30;
age = 29;

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
const add = (a: number, b: number) => a + b;
console.log(add(2, 5));

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", event => console.log(event));
}
