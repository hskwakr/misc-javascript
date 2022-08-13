/* ================================= */
/* Array                             */
/* literal                           */
/* ================================= */

// [1, 2, 3];
// [
//     1,
//     2,
//     3,
// ]

/* ================================= */
/* Array                             */
/* type annotation                   */
/* ================================= */

// let array: number[];
// array = [1, 2, 3];

// let array: Array<number>;
// array = [1, 2, 3];

/* ================================= */
/* Array                             */
/* array is object                   */
/* ================================= */

// const list1 = [1, 2, 3];
// const list2 = [1, 2, 3];
// console.log(list1 == list2); // false

/* ================================= */
/* Array                             */
/* access to array                   */
/* ================================= */

// const abc = ["a", "b", "c"];
// console.log(abc[0]); // "a"

// const abc = ["a", "b", "c"];
// console.log(abc[100]); // undefined

// const abc: string[] = ["a", "b", "c"];
// const character: string = abc[0];

// const abc = ["a", "b", "c"];
// const character: string = abc[100]; // エラーにはならない

// const abc = ["a", "b", "c"];
// const character: string = abc[100];
// console.log(character);
// character.toUpperCase(); // runtime error
// // need noUncheckedIndexedAccess

// const abc: string[] = ["a", "b", "c"];
// const character = abc[0];
// // 絞り込み条件
// if (typeof character === "string") {
//   character.toUpperCase(); // コンパイルエラーにならない
// }

/* ================================= */
/* Array                             */
/* readonly array                    */
/* ================================= */

// const nums: readonly number[] = [1, 2, 3];
// const nums: ReadonlyArray<number> = [1, 2, 3];

// const nums: readonly number[] = [1, 2, 3];
// nums.push(4); // error

// const nums: readonly number[] = [1, 2, 3];
// console.log("push" in nums); // true

// const nums: readonly number[] = [1, 2, 3];
// // @ts-ignore
// nums.push(4); // 本来コンパイルエラーになるが無視する
// console.log(nums);

// const readonlyNumbers: readonly number[] = [1, 2, 3];
// const writableNumbers: number[] = readonlyNumbers; // error

// const readonlyNumbers: readonly number[] = [1, 2, 3];
// const writableNumbers: number[] = readonlyNumbers as number[];

/* ================================= */
/* Array                             */
/* destructuring assignment          */
/* ================================= */

// const oneToFive = [1, 2, 3, 4, 5];
// const [one, two, three] = oneToFive;
// console.log(one); // 1
// console.log(two); // 2
// console.log(three); // 3

// const oneToFive = [1, 2];
// const [one, two, three] = oneToFive;
// console.log(three); // undefined

// const oneToFive = [1, 2, 3, 4, 5];
// const [one, two, three] = oneToFive;
// const num: number = one; // oneはnumber型になるので代入できる

// // noUncheckedIndexedAccess
// const oneToFive = [1, 2, 3, 4, 5];
// const [one, two, three] = oneToFive;
// const num: number = one;
// // 上はコンパイルエラーになる。
// // oneはnumber | undefinedになり、numberには代入できないため。

// const twoByTwo = [
//   [1, 2],
//   [3, 4],
// ];
// const [[one, two], [three]] = twoByTwo;
// console.log(one); // 1
// console.log(two); // 2
// console.log(three); // 3

// const oneToFive = [1, 2, 3, 4, 5];
// const [, , , four, five] = oneToFive;
// console.log(four); // 4
// console.log(five); // 5

// const oneToFive = [1, 2, 3, 4, 5];
// const [one, ...rest] = oneToFive;
// console.log(one); // 1
// console.log(rest); // [2, 3, 4, 5]

/* ================================= */
/* Array                             */
/* destructive operation             */
/* ================================= */

// // non destructive
// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const all = nums1.concat(nums2);
// console.log(nums1); // [ 1, 2 ]
// console.log(nums2); // [ 3, 4 ]
// console.log(all); // [ 1, 2, 3, 4 ]

// // destructive
// const nums = [1, 2];
// nums.push(3);
// console.log(nums); // [ 1, 2, 3 ]

/* ================================= */
/* Array                             */
/* loop                              */
/* ================================= */

// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
//   // 0 a
//   // 1 b
//   // 2 c の順で出力される
// }

// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === "b") {
//     break;
//   }
// }
// // a b が順に出力されて終了する

// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "a") {
//     continue;
//   }
//   console.log(arr[i]);
//   // b c が順に出力される
// }

// const arr = ["a", "b", "c"];
// for (const value of arr) {
//   console.log(value);
//   // a b cの順で出力される
// }

// const arr = ["a", "b", "c"];
// arr.forEach((value, i) => {
//   console.log(value, i);
//   // a 0
//   // b 1
//   // c 2 の順で出力される
// });

// const arr = ["a", "b", "c"];
// const arr2 = arr.map((value) => value + value);
// console.log(arr2); // [ 'aa', 'bb', 'cc' ]

// const arr = ["a", "b", "c"];
// arr.foo = "bar"; // 追加のプロパティ
// for (const x in arr) {
//   console.log(x, arr[x]);
//   // 0 a
//   // 1 b
//   // 2 c
//   // foo bar が順に出力される
// }

/* ================================= */
/* Array                             */
/* spread syntax                     */
/* ================================= */

// const arr = [1, 2, 3];
// const arr2 = [];
// for (const item of arr) {
//   arr2.push(item);
// }
// arr2.push(4);

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];

// const arr = [1, 2, 3];
// const arr2 = [0, ...arr, 4];

// const arr = [1, 2, 3];
// const arr2 = [...arr];

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concated = [...arr, ...arr2];

/* ================================= */
/* Array                             */
/* covariance                        */
/* ================================= */

// interface Animal {
//   isAnimal: boolean;
// }

// interface Dog extends Animal {
//   isDog: boolean;
// }

// let pochi: Dog = { isAnimal: true, isDog: true };
// let animal: Animal = pochi; // 代入OK

// let animal: Animal = { isAnimal: true };
// let pochi: Dog = animal; // error

// const dogs: Dog[] = [pochi];
// const animals: Animal[] = dogs; // 代入OK

// interface Animal {
//   isAnimal: boolean;
// }

// interface Dog extends Animal {
//   wanwan(): string; // メソッド
// }

// const pochi = {
//   isAnimal: true,
//   wanwan() {
//     return "wanwan"; // メソッドの実装
//   },
// };

// const dogs: Dog[] = [pochi];
// const animals: Animal[] = dogs;
// animals[0] = { isAnimal: true }; // 同時にdogs[0]も書き換わる
// const mayBePochi: Dog = dogs[0];
// mayBePochi.wanwan();
// // JS実行時エラー: mayBePochi.wanwan is not a function
