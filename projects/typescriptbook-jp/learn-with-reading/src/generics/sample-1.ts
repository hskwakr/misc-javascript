/* ================================= */
/* generics                          */
/* ================================= */

// function chooseRandomlyString(v1: string, v2: string): string {
//   return Math.random() <= 0.5 ? v1 : v2;
// }

// const winOrLose = chooseRandomlyString("勝ち", "負け");

// // 数値用の抽選関数
// function chooseRandomlyNumber(v1: number, v2: number): number {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// const num: number = chooseRandomlyNumber(1, 2);

// // URLオブジェクト向けの抽選関数
// function chooseRandomlyURL(v1: URL, v2: URL): URL {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// const url: URL = chooseRandomlyURL(urlA, urlB);

// // 重複した3つの関数
// function chooseRandomlyString(v1: string, v2: string): string {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomlyNumber(v1: number, v2: number): number {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomlyURL(v1: URL, v2: URL): URL {
//   return Math.random() <= 0.5 ? v1 : v2;
// }

// function chooseRandomly(v1: any, v2: any): any {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// let str = chooseRandomly(0, 1);
// str = str.toLowerCase();

// function chooseRandomly<String>(v1: <string>, v2: <string>): <string> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomly<Number>(v1: <number>, v2: <number>): <number> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// function chooseRandomly<URL>(v1: <URL>, v2: <URL>): <URL> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// chooseRandomly<String>("勝ち", "負け");
// chooseRandomly<Number>(1, 2);
// chooseRandomly<URL>(urlA, urlB);

// // 注意: これは架空の文法です
// function chooseRandomly<type>(v1: <type>, v2: <type>): <type> {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// chooseRandomly<string>("勝ち", "負け");
// chooseRandomly<number>(1, 2);
// chooseRandomly<URL>(urlA, urlB);

// function chooseRandomly<T>(v1: T, v2: T): T {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// chooseRandomly<string>("勝ち", "負け");
// chooseRandomly<number>(1, 2);
// chooseRandomly<URL>(urlA, urlB);

// function chooseRandomly<T>(v1: T, v2: T): T {
//   return Math.random() <= 0.5 ? v1 : v2;
// }
// let str = chooseRandomly<string>(0, 1);
// // Argument of type 'number' is not assignable to parameter of type 'string'.
// str = str.toLowerCase();
