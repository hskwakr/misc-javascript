/* ================================= */
/* promise / async / await           */
/* ================================= */

// type Callback<T> = (result: T) => void;

// // 非同期でAPIにリクエストを投げて値を取得する処理
// function request1(callback: Callback<number>) {
//   setTimeout(() => {
//     callback(1);
//   }, 1000);
// }
// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request2(result1: number, callback: Callback<number>) {
//   setTimeout(() => {
//     callback(result1 + 1);
//   }, 1000);
// }
// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request3(result2: number, callback: Callback<number>) {
//   setTimeout(() => {
//     callback(result2 + 2);
//   }, 1000);
// }

// // コールバック地獄
// // 一つ前のAPIの結果を待って次のAPIをリクエストするために
// // コールバック関数が入れ子になってしまう
// request1((result1) => {
//   request2(result1, (result2) => {
//     request3(result2, (result3) => {
//       console.log(result3);
//       // @log: 4
//     });
//   });
// });
