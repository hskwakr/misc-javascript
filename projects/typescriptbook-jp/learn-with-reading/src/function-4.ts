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
