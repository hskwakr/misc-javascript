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
