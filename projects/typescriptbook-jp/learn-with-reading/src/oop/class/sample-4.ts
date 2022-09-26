/* eslint-disable max-len */
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

/* ================================= */
/* abstract class                    */
/* ================================= */

// abstract class Food {
//   constructor(protected name: string, protected calorie: number) {}

//   showDebug() {
//     console.log(`name = ${this.name} `);
//     console.log(`calorie = ${this.calorie}kcal `);
//   }
//   abstract keepRefrigerated(): boolean;
// }
// class Meat extends Food {}
// // Non-abstract class 'Meat' does not implement inherited abstract member 'keepRefrigerated' from class 'Food'.

// class Meat extends Food {
//     keepRefrigerated(): boolean {
//       return true;
//     }
//   }
