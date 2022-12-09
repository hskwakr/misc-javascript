// interface Person {
//   // name: string = "Max"; // error
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;
// user1 = {
//   name: "Max",
//   age: 30,

//   greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there - I am");

interface AnotherInterface {}

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable, AnotherInterface {
  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person("Max");
user1.greet("Hi,");
