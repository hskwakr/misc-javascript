/* ================================= */
/* Define variables                  */
/* ================================= */

// let x = 1;
// x = 2;

// const y = 1;
// y = 2; // error

// let x;
// x = 1;

// const obj = { a: 1 };
// obj = { a:2 }; // error
// obj.a = 2; // not error

/* ================================= */
/* Type annotation                   */
/* ================================= */

// const num: number = 123;

/* ================================= */
/* Never use var                     */
/* ================================= */

// function test() {
//   var x = 1; // var cause unexpected error
//   var x = 2;
//   console.log(x);
// }

// let x = 1;
// let x = 2; // error

// const y = 1;
// const y = 2; // error

// var innerWidth = 10; // var overwrite global variables
// console.log(window.innerWidth);

/* ================================= */
/* Hoisting                          */
/* ================================= */

// console.log(greeting); // -> undefined
// var greeting = "こんにちは";

// console.log(x); // -> undefined
// let x = 1;
// console.log(y);
// const y = 2; // -> undefined

// function output() {
//   var x = 1;
//   {
//     console.log(x); // error
//     let x = 2;
//   }
// }
// output();

// function print() {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x); // -> 2
//   }
//   console.log(x); // -> 2
// }

// function print() {
//   const x = 1;
//   if (true) {
//     const x = 2;
//     console.log(x); // -> 2
//   }
//   console.log(x); // -> 1
// }

/* ================================= */
/* Type inferen                      */
/* ================================= */

// let x = 1; // let x: number = 1;
// x = "hello"; // error

/* ================================= */
/* Primitive types                   */
/* ================================= */

// null.toString(); // error
// "name".length; // 4

/* ================================= */
/* Boolean type                      */
/* ================================= */

// const isOk = true;
// const isPanda = false;
// const isOk: boolean = true;

/* ================================= */
/* Number type                       */
/* ================================= */

// 123 // 整数
// -123 // 整数(負の数)
// 20.315 // 小数

// 0.1 === .1
// 5.0 === 5.

// 0b1010 // 2進数
// 0o755 // 8進数
// 0xfff // 16進数

// 100_000_000 // 1億

// _100 // error
// 100_ // error
// 100_.0 // error
// 100._0 // error
// 1__00 // error

// 5.toString(); // error
// 5..toString();
// (5).toString();

// const count: number = 123;

// const price = parseInt("百円");
// console.log(price); // -> NaN

// const price = parseInt("百円");
// if (Number.isNaN(price)) {
//   console.log("数値化できません");
// }

// console.log(NaN == NaN); // -> false
// console.log(NaN === NaN); // -> false

/* ================================= */
/* Decimal calculations              */
/* ================================= */

// 0.1 + 0.2 === 0.3; // -> false
// 0.30000000000000004

// 0.5 + 0.25 === 0.75; // -> true

// 110 * 1.1; // -> 121.00000000000001
// (110 * 11) / 10 === 121; // -> true

// const price1 = (101 * 11) / 10; // 111.1
// const price2 = (103 * 11) / 10; // 113.3
// price1 + price2; // 224.39999999999998

/* ================================= */
/* String type                       */
/* ================================= */

// "Hello";
// "Hello";
// `Hello`;

// 'He said "madam, I\'m Adam."'
// "He said \"madam, I'm Adam.\""

// const count = 10;
// console.log(`現在、${count}名が見ています。`); // 現在、10名が見ています。

// `税込み${Math.floor(100 * 1.1)}円`

// const message: string = "Hello";

// "hello" + "world"

/* ================================= */
/* Null type                         */
/* ================================= */

// const x = null;
// const x: null = null;

// console.log(typeof null); // -> object

/* ================================= */
/* Undefined type                    */
/* ================================= */

// let name;
// console.log(name); // -> undefined

// function func() {}
// console.log(func()); // -> undefined

// const obj = {};
// console.log(obj.name); // -> undefined

// const arr = [];
// console.log(arr[1]); // -> undefined

// const x: undefined = undefined;

/* ================================= */
/* Symbol type                       */
/* ================================= */

// const s1 = Symbol("foo");
// const s2 = Symbol("foo");
// console.log(s1 === s1); // -> true
// console.log(s1 === s2); // -> false

// const s: symbol = Symbol();

/* ================================= */
/* Bigint type                       */
/* ================================= */

// const x = 100n;

// const x: bigint = 100n;

// const x = BigInt(100);
// const y = BigInt("9007199254740991");

// 2n + 3; // error

// const i = 2n + BigInt(3);
// console.log(i); // -> 5n

/* ================================= */
/* Type coercion                     */
/* ================================= */

// "1" - 1; // -> 0
// "1" + 1; // -> "11"

/* ================================= */
/* Boxing                            */
/* ================================= */

// // プリミティブ型
// const str = "abc";
// // ラッパーオブジェクトに入れる
// const strObject = new String(str);
// // オブジェクトのように扱う
// strObject.length; // フィールドの参照
// strObject.toUpperCase(); // メソッド呼び出し

// const str = "abc";
// // オブジェクトのように扱う
// str.length; // フィールドの参照
// str.toUpperCase(); // メソッド呼び出し

// null.toString(); // error
// undefined.toString(); // error

// // ❌間違い
// const num1: Number = 0;
// // ✅正しい
// const num2: number = 0;

/* ================================= */
/* literal type                      */
/* ================================= */

// let x: 1;
// x = 1;
// x = 100; // error

// const isTrue: true = true;
// const num: 123 = 123;
// const str: "foo" = "foo";

// let num: 1 | 2 | 3 = 1;

/* ================================= */
/* Any type                          */
/* ================================= */

// let value: any;
// value = 1; // OK
// value = "string"; // OK
// value = { name: "オブジェクト" }; // OK

// const str: any = 123;
// str.toLowerCase(); // error

// function hello(name) { // parameter name: any
//   console.log(`Hello, ${name.toUpperCase()}`);
// }
// hello(1);
