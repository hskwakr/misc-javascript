/* ================================= */
/* function type declaration         */
/* ================================= */

// type 型の名前 = (引数名: 引数の型) => 戻り値の型;

// type Increment = (num: number) => number;

// const increment: Increment = (num: number): number => num + 1;
// //               ^^^^^^^^^型注釈

// const increment: Increment = function (num: number): number {
//   return num + 1;
// };

// type 型の名前 = {
//   (引数名: 引数の型): 戻り値の型;
// };

// // アロー関数構文による型宣言
// type Increment1 = (num: number) => number;
// // メソッド構文による型宣言
// type Increment2 = {
//   (num: number): number;
// };

// // 関数の実装
// function increment(num: number): number {
//   return num + 1;
// }
// // 関数の型を宣言する
// type Increment = typeof increment;

/* ================================= */
/* hoisting                          */
/* ================================= */

// hello();
// function hello() {
//   console.log("Hello World");
// }

// hello(); // error
// const hello = function () {
//   console.log("Hello World");
// };

/* ================================= */
/* traditional function              */
/* vs                                */
/* arrow function                    */
/* ================================= */

// // 従来の関数(関数式)
// [1, 2, 3].map(function (n) {
//   return n + 1;
// });
// // アロー関数
// [1, 2, 3].map((n) => n + 1);

// function Cat(name) {
//   this.name = name;
// }
// // Catオブジェクトを生成する
// const cat = new Cat("ミケ");
// console.log(cat);

// const Cat = (name) => {};
// const cat = new Cat("ミケ");

// function Cat(name: string) {
//   /* ... */
// }
// const cat = new Cat("ミケ"); // error

// function showThis() {
//   console.log(this);
// }

// showThis(); // window

// ("use strict");
// showThis(); // undefined

// const foo = { name: "Foo" };
// // 関数をオブジェクトのメンバーにする
// foo.showThis = showThis;
// // メソッドとして呼び出す
// foo.showThis(); // {name: "Foo", showThis: function}

// function showThis() {
//   this.name = "Foo";
//   console.log(this);
// }
// new showThis(); // {name: "Foo"}

// const oneSecond = 1000;
// const timer = {
//   message: "時間です！",
//   start: function () {
//     console.log(this); // ❶
//     // 従来の関数
//     setTimeout(function () {
//       console.log(this.message); // ❷
//     }, oneSecond);
//     // アロー関数
//     setTimeout(() => {
//       console.log(this.message); // ❸
//     }, oneSecond);
//   },
// };
// timer.start();

// function showThis() {
//   console.log(this);
// }
// const obj = { name: "foo" };
// showThis.bind(obj)(); // objをthisにバインドして、関数呼び出し

// const showThis = () => {
//   console.log(this);
// };
// const obj = { name: "foo" };
// showThis.bind(obj)(); // {}

// function foo() {
//   console.log(arguments);
// }
// foo(1, 2, 3); // [1, 2, 3]

// const foo = (...args) => {
//   console.log(args);
// };
// foo(1, 2, 3); // [1, 2, 3]

// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// for (const value of generateNumbers()) {
//   console.log(value); // 1、2、3の順で出力される
// }

// function foo(a, a, a) {
//   console.log(a);
// }
// foo(1, 2, 3); // 3

// "use strict";
// function foo(a, a) {}
// //              ^構文エラー

// const foo = (a, a) => {};
// //              ^構文エラー

// function foo(a: number, a: number) {} // error

// var value = 1;
// var value = 2;
// console.log(value); // 2

// let value = 1;
// let value = 2; // 構文エラー

// function foo() {
//   console.log("1つ目の関数");
// }
// function foo() {
//   console.log("2つ目の関数");
// }
// foo(); // 2つ目の関数

// const foo = () => {};
// const foo = () => {};
// //    ^^^構文エラー

// const nums = [1, 2, 3, 4];
// const even = nums.filter(function (n) {
//   return n % 2 === 0;
// });
// console.log(even);

// const nums = [1, 2, 3, 4];
// const even = nums.filter((n) => n % 2 === 0);
// console.log(even);

// button.addEventListener("click", コールバック関数);

// <button id="save">保存</button>
// <script>
//   const button = document.getElementById("save");
//   button.addEventListener("click", function () {
//     this.innerText = "保存中…";
//   });
// </script>

// <button id="save">保存</button>
// <script>
//   const button = document.getElementById("save");
//   button.addEventListener("click", () => {
//     button.innerText = "保存中…";
//     // ^^^buttonを参照
//   });
// </script>

// const taroYamada = {
//   firstName: "Taro",
//   lastName: "Yamada",
//   // 従来の関数
//   fullName1: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   // アロー関数
//   fullName2: () => {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(taroYamada.fullName1()); // Taro Yamada
// console.log(taroYamada.fullName2()); // undefined undefined

// const taroYamada = {
//   firstName: "Taro",
//   lastName: "Yamada",
//   fullName: () => {
//     return taroYamada.firstName + " " + taroYamada.lastName;
//   },
// };
// console.log(taroYamada.fullName());

// // プログラムの概要
// step1();
// step2();
// step3();
//
// // 各処理の詳細
// function step1() {
//   /* 処理の詳細 */
// }
// function step2() {
//   /* 処理の詳細 */
// }
// function step3() {
//   /* 処理の詳細 */
// }

// step1(); // error
// step2(); // error
// step3(); // error
// const step1 = () => {};
// const step2 = () => {};
// const step3 = () => {};

// const main = () => {
//   step1();
//   step2();
//   step3();
// };
// const step1 = () => {};
// const step2 = () => {};
// const step3 = () => {};
// main();

// // 変数宣言の間にあるアロー関数
// const str = "foo";
// const obj = { value: str };
// const func = (n) => n + 1;
// const nums = [1, 2, 3];

// // 変数宣言の間にある関数宣言
// const str = "foo";
// const obj = { value: str };
// function func(n) {
//   return n + 1;
// }
// const nums = [1, 2, 3];
