/* ================================= */
/* type guard function               */
/* ================================= */

// function isDuck(animal: Animal): animal is Duck {
//   return animal instanceof Duck;
// }

// // ここではquacks()は存在しない
// animal.quacks();
// // Property 'quacks' does not exist on type 'Animal'.
// if (isDuck(animal)) {
//   animal.quacks();
//   // ...
// }

// function isUndefined(value: unknown): value is undefined {
//   return typeof value === "number";
// }

/* ================================= */
/* assertion functions               */
/* ================================= */

// function isDuck(animal: Animal): asserts animal is Duck {
//   if (walksLikeDuck(animal)) {
//     if (quacksLikeDuck(animal)) {
//       return;
//     }
//   }
//   throw new Error("YOU ARE A FROG!!!");
// }

// // ここではquacks()は存在しない
// animal.quacks();
// // Property 'quacks' does not exist on type 'Animal'.

// isDuck(animal);
// animal.quacks();
