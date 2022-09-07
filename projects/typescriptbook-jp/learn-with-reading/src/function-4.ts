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
