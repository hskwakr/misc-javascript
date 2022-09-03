/* ================================= */
/* function is value                 */
/* ================================= */

// function hello() {
//   return "Hello World";
// }
// const helloWorld = hello; // 関数を変数に代入
// helloWorld(); // 関数呼び出しも問題なくできる

// function hello() {
//   return "HELLO";
// }
// // これは二度目の関数宣言ですが、実質的には再代入です
// function hello() {
//   return "KONNICHIWA";
// }
// hello(); // KONNICHIWA

// const hello = function () {
//   return "HELLO";
// };

// function main() {
//   // ローカルスコープの関数
//   function hello() {
//     console.log("hello");
//   }
//   hello();
// }
// main(); // hello
// // ローカルスコープで宣言された関数にはアクセスできない
// hello();

/* ================================= */
/* function is object                */
/* ================================= */

// function hello() {
//   return "Hello World";
// }
// hello.prop = 123;

/* ================================= */
/* void type                         */
/* ================================= */

// function print(message: string): void {
//   console.log(message);
// }

// function print(message: string): undefined {
//   console.log(message);
//   return undefined; // これがないとコンパイルエラーになる
// }

// function getIfExists(numbers: number[], search: number): number | undefined {
//   if (numbers.includes(search)) {
//     return search;
//   }
//   return undefined;
// }

// const v: void = undefined;
// const u: undefined = v; // error
