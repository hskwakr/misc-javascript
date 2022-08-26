/* ================================= */
/* function declaration              */
/* ================================= */

// function hello() {
//   return "hello";
// }

// function increment(num: number): number {
//   return num + 1;
// }

// function increment(num): number { // num: any
//   return num + 1;
// }

// function increment(num: number) {
//   return num + 1;
// }
// const value = increment(1);

// function getFirst(items: number[]) {
//   if (typeof items[0] === "number") {
//     return items[0];
//   }
//   return null;
// }
// getFirst([1, 2, 3]);

// function getFirst(items: number[]) {
//   if (typeof items[0] === "number") {
//     return items[0];
//   }
//   return null;
// }
// getFirst([1, 2, 3]);

// function getFirst(items: number[]) {
//   if (typeof items[0] === "number") {
//     return items[0];
//   }
//   return null;
// }
// getFirst([1, 2, 3]);

/* ================================= */
/* function expression               */
/* ================================= */

// function 関数名(引数) {
//   // 処理内容
// }

// const 変数名 = function 関数名(引数) {
//   // 処理内容
// };

// const 変数名 = function () {};
// //                     ^関数名を省略
// 変数名(); // 呼び出し

// function increment(n) {
//   return n + 1;
// }

// const increment = function (n) {
//   return n + 1;
// };

// const オブジェクト = {
//   メソッド名: function () {},
// };

// button.addEventListener("click", function (event) {
//   console.log("クリックされました");
// });

// const increment = function (n: number) {
//   //                         ^^^^^^^^引数の型注釈
//   return n + 1;
// };

// const increment = function (n) {}; // n: any

// type UseString = (value: string) => void;
// let useString: UseString; // 関数型の変数
// useString = function (value) {}; // 関数型変数に関数式を代入

// const getZero = function (): number {
//   //                         ^^^^^^戻り値の型注釈
//   return 0;
// };

// const getZero = function () {
//   return 0;
// };
// const num = getZero();

// const factorial = function fact(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * fact(n - 1); // 関数名を使い再帰呼び出し
// };

// //                        ↓関数名を省略
// const factorial = function (n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1); // 変数名を使った再帰呼び出し
// };

/* ================================= */
/* arrow function                    */
/* ================================= */

// (引数) => {
//   // 処理内容
// };

// const 変数名 = (引数) => {
//   // 処理内容
// };

// const increment = function (n) {
//   return n + 1;
// };

// const increment = (n) => {
//   return n + 1;
// };

// const increment = n => { /* ... */ };
// //                ^カッコの省略

// const increment = n => n + 1;
// //                     ^^^^^returnと中括弧の省略

// (n) => { foo: n + 1 }; // 誤り
// (n) => ({ foo: n + 1 }); // 正しい

// const increment = (num: number) => num + 1;
// //                    ^^^^^^^^引数の型注釈

// const increment = (num: number): number => num + 1;
// //                             ^^^^^^^^戻り値の型注釈

// const increment = num => num + 1;

// [1, 2, 3].map((num) => num + 1); // 型注釈が省略可
