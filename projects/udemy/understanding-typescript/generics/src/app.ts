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

// function merge<T extends {}, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Max" }, { age: 30 });
// console.log(mergedObj.age);

// Working with Constrains

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge({ name: "Max" }, 30); // error

// Another Generic Function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));
// console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)); // error

// The "keyof" Constraint

// function extractAndConvert(obj: object, key: string) {
//   return obj[key]; // error
// }
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// console.log(extractAndConvert({ name: "Max" }, "name"));

// Generic Classes

class DataStorage<T> {
  protected data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// // problem with object
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems()); // bug: Max not removed

// solution with object
const objStorage = new DataStorage<object>();
const maxObj = { name: "Max" };
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });
// ...
objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

class PrimitiveDataStorage<
  T extends string | number | boolean
> extends DataStorage<T> {}

const boolStorage = new PrimitiveDataStorage<boolean>();

// Generic Utility Types

// Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // error
