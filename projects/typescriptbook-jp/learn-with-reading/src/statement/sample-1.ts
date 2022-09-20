/* ================================= */
/* scope                             */
/* ================================= */

// Date === window.Date; //=> true
// console === window.console; //=> true

// function func() {
//   const variable = 123;
//   return variable; // 参照できる
// }
// console.log(variable); // 参照できない

// const x = 100;

// function a() {
//   console.log(x); // 関数の外の変数が見える
// }

// a();

// {
//   const x = 100;
//   console.log(x);
// }
// console.log(x); // xを参照できない

// if (navigator.userAgent.includes("Firefox")) {
//   const browser = "Firefox";
// } else {
//   const browser = "Firefox以外";
// }
// console.log(browser); // 参照できずエラー

// function func() {
//   foo = "ローカル変数のつもり";
// }

// func();
// console.log(window.foo);

/* ================================= */
/* if-else                           */
/* ================================= */

// if (value === 0) {
//   // ...
// } else {
//   // ...
// }

// if (value === 0) {
//   // ...
// } else if (value === 1) {
//   // ...
// } else {
//   // ...
// }

// // こんな書き方はできない
// const result = if (value === 0) "OK" else "NG";

// const result = value === 0 ? "OK" : "NG";

// let result;
// if (value === 0) {
//   result = "OK";
// } else {
//   result = "NG";
// }

/* ================================= */
/* ternary operato                   */
/* ================================= */

// const age = 20;
// const drink = age >= 20 ? "ビール" : "ジュース";
// console.log(drink);

// // こうした書き方はできない
// const drink = if (age >= 20) "ビール" else "ジュース";

// const extension = "ts";
// const language =
//   extension === "js"
//     ? "JavaScript"
//     : extension === "ts"
//     ? "TypeScript"
//     : extension === "java"
//     ? "Java"
//     : "不明";

// const extension = "ts";
// let language;
// if (extension === "js") {
//   language = "JavaScript";
// } else if (extension === "ts") {
//   language = "TypeScript";
// } else if (extension === "java") {
//   language = "Java";
// } else {
//   language = "不明";
// }

/* ================================= */
/* for of - expand for               */
/* ================================= */

// const numbers = [1, 2, 3];
// for (const n of numbers) {
//   console.log(n);
// }

// const words = ["I", "love", "TypeScript"];
// for (const [index, word] of words.entries()) {
//   console.log(index, word);
// }
// // 0 I
// // 1 love
// // 2 TypeScript

/* ================================= */
/* switch                            */
/* ================================= */

// const extension = "ts";
// switch (extension) {
//   case "js":
//     console.log("JavaScript");
//     break;
//   case "ts":
//     console.log("TypeScript");
//     break;
//   default:
//     console.log("不明な言語");
//     break;
// }

// const food = "🍙";
// switch (food) {
//   case "🍎":
//   case "🍓":
//   case "🍉":
//     console.log("くだもの");
//     break;
//   case "🍙":
//   case "🍜":
//   case "🍞":
//     console.log("炭水化物");
//     break;
//   case "🥕":
//   case "🧅":
//   case "🥬":
//     console.log("野菜");
//     break;
//   default:
//     console.log("未知の食べ物");
//     break;
// }

// console.log(null == undefined);
// console.log(null === undefined);

// function test(n: unknown): void {
//   switch (n) {
//     case null:
//       console.log("THIS IS null");
//       return;
//     case undefined:
//       console.log("THIS IS undefined");
//       return;
//     default:
//       console.log("THIS IS THE OTHER");
//   }
// }
// test(null); // THIS IS null
// test(undefined); // THIS IS undefined

/* ================================= */
/* switch                            */
/* fallthrough                       */
/* ================================= */

// let s = "A";
// switch (s) {
//   case "A": // breakが無い分岐
//     console.log(1);
//   case "B": // この分岐にも処理が続く
//     console.log(2);
// }

/* ================================= */
/* switch                            */
/* scope                             */
/* ================================= */

// switch (
//   true // 変数スコープその1
// ) {
//   default:
//     switch (
//       true // 変数スコープその2
//     ) {
//       default:
//       // ...
//     }
// }

// let x = 1;
// switch (x) {
//   case 1:
//     const sameName = "A";
//     break;
//   case 2:
//     const sameName = "B"; // error
//     break;
// }

// let x = 1;
// switch (x) {
//   case 1: {
//     const sameName = "A";
//     break;
//   }
//   case 2: {
//     const sameName = "B";
//     break;
//   }
// }
