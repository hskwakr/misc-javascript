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

/* ================================= */
/* overload function                 */
/* ================================= */

// // 関数シグネチャ部分
// function hello(person: string): void; // シグネチャ1
// function hello(persons: string[]): void; // シグネチャ2
// // 関数の実装部分
// function hello(person: string | string[]): void {
//   if (typeof person === "string") {
//     console.log(`Hello ${person}`);
//   } else {
//     console.log(`Hello ${person.join(",")}`);
//   }
// }

// function 関数名 関数シグネチャ1
// function 関数名 関数シグネチャ2
// function 関数名 すべてのシグネチャを網羅する実装

// // 関数呼び出しシグネチャでHello型を定義
// type Hello = {
//   (person: string): void;
//   (persons: string[]): void;
// };
// // Hello型で型注釈
// const hello: Hello = (person: string | string[]): void => {
//   if (typeof person === "string") {
//     console.log(`Hello ${person}`);
//   } else {
//     console.log(`Hello ${person.join(",")}`);
//   }
// };

// // 関数型とインターセクション型を用いてHello型を定義
// type Hello = ((person: string) => void) & ((persons: string[]) => void);
// const hello: Hello = (person: string | string[]): void => {
//   if (typeof person === "string") {
//     console.log(`Hello ${person}`);
//   } else {
//     console.log(`Hello ${person.join(",")}`);
//   }
// };

// function func(param: 1 | 2): 1 | 2; // 詳しい関数
// function func(param: number): number; // そこそこ詳しい関数
// function func(param: any): any; // 詳しくない関数
// function func(param: any): any {
//   // ...
// }
// const result1 = func(1);
// const result2 = func(100);
// const result3 = func("others");

// // order is important
// function func(param: any): any; // 詳しくない関数。採用される
// function func(param: 1 | 2): 1 | 2; // 詳しい関数。採用されない
// function func(param: any): any {
//   // ...
// }
// const result = func(1); // error

// function func(one: number): void;
// function func(one: number, two: number): void;
// function func(one: number, two?: number): void {}
// func(1, undefined);
// // Argument of type 'undefined' is not assignable to parameter of type 'number'.

// function func(one: number, two?: number): void {}
// func(1, undefined);

// function func(x: string): void;
// function func(x: number): void;
// function func(x: string | number) {}

// function func(x: string | number) {}

// function func<T extends boolean | number | string>(x: T): T {
//   return x;
// }
