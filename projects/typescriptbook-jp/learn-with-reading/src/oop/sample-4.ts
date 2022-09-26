/* eslint-disable max-classes-per-file */
/* ================================= */
/* inheritance                       */
/* ================================= */

// class Parent {}
// class Child extends Parent {}

// class Parent {}
// class Child extends Parent {
//   constructor() {
//     super();
//   }
// }

/* ================================= */
/* instanceof                        */
/* ================================= */

// const parent1 = new Parent();
// const child = new Child();

// console.log(parent1 instanceof Parent); // true
// console.log(parent1 instanceof Child); // false

// console.log(child instanceof Parent); // true
// console.log(child instanceof Child); // true

/* ================================= */
/* nominal typing                    */
/* ================================= */

// class UserId {
//   private readonly id: string;

//   constructor(id: string) {
//     this.id = id;
//   }
// }

// class GroupId {
//   private readonly id: string;

//   constructor(id: string) {
//     this.id = id;
//   }
// }

// const userId: UserId = new GroupId("...");
// // Type 'GroupId' is not assignable to type 'UserId'.
// // Types have separate declarations of a private property 'id'.
