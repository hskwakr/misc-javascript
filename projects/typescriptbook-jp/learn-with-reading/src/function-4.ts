/* ================================= */
/* optional parameter                */
/* ================================= */

// function 関数名(引数名?: 型) {}
// //                  ^オプション引数の標示

// function hello(person?: string) {}
// hello(); // 引数を省略して呼び出せる
// hello("alice"); // 省略しない呼び出しももちろんOK

// function hello(person?: string) {} // (parameter) person: string | undefined

// function hello(person?: string) {
//   console.log(person);
// }
// hello(); // undefined

// function hello(person?: string) {
//   return "Hello " + person.toUpperCase(); // Object is possibly 'undefined'.
// }

// function hello(person?: string) {
//   if (typeof person === "undefined") {
//     person = "anonymous";
//   }
//   return "Hello " + person.toUpperCase();
// }

// function hello(person?: string) {
//   person ??= "anonymous";
//   return "Hello " + person.toUpperCase();
// }

// function hello(person: string = "anonymous") {
//   //                          ^^^^^^^^^^^^^デフォルト引数
//   return "Hello " + person.toUpperCase();
// }

// function hello(person?: string) {
//   if (typeof person === "undefined") {
//     return "Hello ANONYMOUS";
//   }
//   return "Hello " + person.toUpperCase();
// }

// function hello(person?: string) {}
// hello(); // 引数を省略して呼び出せる

// function hello(person: string | undefined) {}
// hello(undefined);
// hello(); // error

// function func(foo?: string, bar: string) {}
// A required parameter cannot follow an optional parameter.

/* ================================= */
/* default parameter                 */
/* ================================= */

// // 関数宣言
// function 関数名(引数 = デフォルト値) {}
// // アロー関数
// (引数 = デフォルト値) => {};

// // 関数宣言
// function 関数名(引数: 型 = デフォルト値) {}
// // アロー関数
// (引数: 型 = デフォルト値) => {};

// function foo(x) {
//   console.log(x);
// }
// foo(); // undefined

// function foo(x = 1) {
//   console.log(x);
// }
// foo(); // 1
// foo(undefined); // 1

// function foo(x = 1) {
//   console.log(x);
// }
// foo(null); // null

// function foo(x = 2 * 2) {}
// function foo(x = parseInt("1.5")) {}

// async function foo(x = await Promise.resolve(1)) {}
// // 'await' expressions cannot be used in a parameter initializer.

// function foo(x = 1) {}
// // (parameter) x: number

/* ================================= */
/* rest parameter                    */
/* ================================= */

// function func(...params) {
//   // ...
// }

// function func(...params) {
//   console.log(params);
// }
// func(1, 2, 3); // [ 1, 2, 3 ]

// function func(param1, ...params) {
//   console.log(param1, params);
// }
// func(1, 2, 3); // [ 1, 2, 3 ]

// // 構文エラーになるコード
// function func(...params1, ...params2) {}
// function func(...params, param1) {}

// function func(...params: number[]) {
//   // ...
// }

// // console.log(Math.max(1, 10, 100)); // 100
// const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const highest = Math.max(scores);
// // Argument of type 'number[]' is not assignable to parameter of type 'number'.

// const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const highest = Math.max(...scores);
// console.log(highest); // 10
