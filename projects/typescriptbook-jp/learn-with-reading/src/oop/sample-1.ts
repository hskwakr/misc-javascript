/* ================================= */
/* class                             */
/* ================================= */

// class Person {}

// const person = new Person();

// const person: Person = new Person();

/* ================================= */
/* constructor                       */
/* ================================= */

// class Person {
//   constructor(name) {
//     // ...
//   }
// }

// class Person {
//   constructor(name: string) {
//     // ...
//   }
// }

// new Person("Alice");

/* ================================= */
/* field                             */
/* ================================= */

// javascript
// class Person {}
// const alice = new Person();
// alice.name = "Alice";

// class Person {
//   name: string;
// }
// const alice = new Person();
// alice.name = "Alice";

// class Person {}
// const person = new Person();
// console.log(person.age); // error
// // Property 'age' does not exist on type 'Person'.

// class Person {
//   private name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// // strictNullChecks
// // strictPropertyInitialization
// class Person {
//   name: string; // error
//   // Property 'name' has no initializer and is not definitely assigned in the constructor.
// }
// const alice = new Person();
// console.log(alice.name);