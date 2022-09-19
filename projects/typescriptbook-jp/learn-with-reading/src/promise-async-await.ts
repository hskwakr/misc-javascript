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

// // 非同期でAPIにリクエストを投げて値を取得する処理
// function request1(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// }
// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request2(result1: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(result1 + 1);
//     }, 1000);
//   });
// }
// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request3(result2: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(result2 + 2);
//     }, 1000);
//   });
// }
// request1()
//   .then((result1) => {
//     return request2(result1);
//   })
//   .then((result2) => {
//     return request3(result2);
//   })
//   .then((result3) => {
//     console.log(result3);
//     // @log: 4
//   });

// type User = {
//   name: string;
//   age: number;
// };

// function getUser(): Promise<User> {
//   return new Promise((resolve) => {
//     const user: User = {
//       name: "太郎",
//       age: 10,
//     };
//     resolve(user);
//   });
// }

// getUser().then((user: User) => {
//   console.log(user);
//   // @log: { "name": "太郎", "age": 10 }
// });

// // Generic type 'Promise<T>' requires 1 type argument(s).
// function request(): Promise { // error
//   return new Promise((resolve) => {
//     resolve(1);
//   });
// }

// // Argument of type 'number' is not assignable
// // to parameter of type 'string | PromiseLike<string>'.
// function request(): Promise<string> {
//   return new Promise((resolve) => {
//     // string型を期待しているが、number型を返しているのでコンパイルエラー
//     resolve(1); // error
//   });
// }

// async function requestAsync(): Promise<number> {
//   return 1;
// }
// // requestAsyncはこれと同じ
// function request(): Promise<number> {
//   return new Promise((resolve) => {
//     resolve(1);
//   });
// }
// requestAsync().then((result) => {
//   console.log(result);
//   // @log: 1
// });

// async function requestAsync(): Promise<number> {
//   return new Promise((resolve) => {
//     resolve(1);
//   });
// }

// requestAsync().then((result) => {
//   console.log(result);
//   // @log: 1
// });

// // 1秒後に値を返す
// function request(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 1000);
//   });
// }
// // この書き方はできない
// // const result = await request();
// // console.log(result);
// async function main() {
//   const result = await request();
//   console.log(result);
//   // @log: "hello"
// }
// main();

// // 非同期でAPIにリクエストを投げて値を取得する処理
// function request1(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// }

// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request2(result1: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(result1 + 1);
//     }, 1000);
//   });
// }

// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request3(result2: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(result2 + 2);
//     }, 1000);
//   });
// }

// async function main() {
//   const result1 = await request1();
//   const result2 = await request2(result1);
//   const result3 = await request3(result2);
//   console.log(result3);
//   // @log: 4
// }

// main()
//   .then(() => {})
//   .catch(() => {});
