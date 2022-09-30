/* ================================= */
/* reuse type                        */
/* ================================= */

// const obj = { a: 1, b: 2, c: 3 };
// const keys1 = ["a", "b", "c"];
// const keys2 = Object.keys(obj); // keys1より保守性が高い

// type Obj = { a: string; b: string; c: string };
// type Keys = keyof Obj;
// // => "a" | "b" | "c"

/* ================================= */
/* typeof                            */
/* ================================= */

// const point = { x: 135, y: 35 };
// type Point = typeof point;
// // type Point = {
// //     x: number;
// //     y: number;
// // }

/* ================================= */
/* keyof                            */
/* ================================= */

// type Person = {
//   name: string;
// };
// type PersonKey = keyof Person;
// // type PersonKey = "name"

// type Book = {
//   title: string;
//   price: number;
//   rating: number;
// };
// type BookKey = keyof Book;
// // 上は次と同じ意味になる
// type BookKey = "title" | "price" | "rating";

// type MapLike = { [K: string]: any };
// type MapKeys = keyof MapLike;
// // type MapKeys = string | number

// type MapLike = { [K in "x" | "y" | "z"]: any };
// type MapKeys = keyof MapLike;
// // type MapKeys = "x" | "y" | "z"

// type What = keyof {};
// // type What = never

// type AnyKeys = keyof any;
// // type AnyKeys = string | number | symbol
