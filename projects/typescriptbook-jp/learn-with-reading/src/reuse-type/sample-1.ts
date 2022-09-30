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
