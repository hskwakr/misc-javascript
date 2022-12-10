// Built-in Generics & What are Generics?

// const names: Array<string> = []; // string
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("10"); // error
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" "); // error
// });

// Creating a Generic Function

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// // console.log(merge({ name: "Max" }, { age: 30 }));

// const mergedObj = merge({ name: "Max" }, { age: 30 });

// // can't access
// // mergedObj.name;
// // mergedObj.age;

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
// console.log(mergedObj.age);
