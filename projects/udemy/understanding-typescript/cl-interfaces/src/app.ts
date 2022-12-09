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

interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

interface AnotherInterface {}

class Person implements Greetable, AnotherInterface {
  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person("Max");
user1.greet("Hi,");
